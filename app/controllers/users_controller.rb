class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @user, status: 200 }
    end
  end

  def new

  end

  def create

  end

  def edit

  end

  def update

  end

end
