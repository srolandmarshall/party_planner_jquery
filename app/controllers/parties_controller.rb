class PartiesController < ApplicationController
  def index
    @user = current_user
    # @hosted_parties = current_user.hosted_parties
    # @attended_parties = current_user.attended_parties
    # @parties = @attended_parties.nonexpired_parties
    # @old_parties = @attended_parties.old_parties
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @user, status: 200 }
    end
  end

  def show
    @party = Party.find(params[:id])
    @attendees = @party.attendees
    if @party.attendees.include?(current_user) || @party.host == current_user
      @host = @party.host
      @dishes = @party.dishes
      @foods = @party.foods
      # @desserts = @dishes.desserts
      # @entrees = @dishes.entrees
      # @apps = @dishes.apps
      respond_to do |format|
        format.html { render :show }
        format.json { render json: @party, status: 200 }
      end
    else
      flash[:notice]="You're not invited to this party"
      redirect_to root_path
    end

  end

  def new
    @user = current_user
    @users = Array.new(User.all)
    @users.delete(@user)
    @party = Party.new
    @attendees = @party.attendees
  end

  def create
    @user = current_user
    @party = Party.new(party_params)
    pp=params[:party]
    @party.attendees = set_attendees(pp[:attendees])
    @party.host = @user
    binding.pry
    @party.time = DateTime.new(pp["time(1i)"].to_i,pp["time(2i)"].to_i,pp["time(3i)"].to_i,pp["time(4i)"].to_i,pp["time(5i)"].to_i)
    if @party.save
      flash[:notice] = "Party created"
      redirect_to root_path
    else
      @party.valid?
      flash[:notice] = @party.errors.full_messages

      redirect_to new_party_path
    end
  end

  def edit
    @party = Party.find(params[:id])
    @user = current_user
    @users = Array.new(User.all)
    @users.delete(@user)
    @attendees = @party.attendees
  end

  def update
    @party=Party.find(params[:id])
    if @party.update(party_params)
      pp=params[:party]
      @party.attendees = set_attendees(pp[:attendees])
      begin
        @party.time = DateTime.civil(pp["time(1i)"].to_i,pp["time(2i)"].to_i,pp["time(3i)"].to_i,pp["time(4i)"].to_i,pp["time(5i)"].to_i)
      rescue ArgumentError => e
        flash[:error] = "INVALID DATE... try again"
        redirect_to :back
        return
      end
      flash[:notice] = "Party Updated!"
      redirect_to party_path(@party)
    else
      flash[:notice] = @party.errors.full_messages
      redirect_to party_path(@party)
    end
  end

  private

  def set_attendees(list)
    attendees = []
    list.each do |user|
      if user != ""
        attendees << User.find(user)
      end
    end
    attendees
  end

  def party_params
    params.require(:party).permit(:name, :address, :time, :host_id, :attendees)
  end

end
