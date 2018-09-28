class DishesController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @dishes = @user.dishes
    @desserts = @dishes.desserts
    @entrees = @dishes.entrees
    @apps = @dishes.apps
  end

  def new
    @party = Party.find(params[:party_id])
    @foods = Food.all
    @dish = Dish.new
  end

  def create
    @user = current_user
    @party = Party.find(params[:id])
    @food = Food.create(name: params[:food_name], category: params[:category])
    @dish = Dish.create(food_id: @food.id, user_id: @user.id, party_id: @party.id)
    render json: @dish, status: 201
  end

  def show
    @dish = Dish.find(params[:id])
    render json: @dish, status: 200
  end

  def delete
  end

  def destroy
    @party = Party.find(params[:party_id])
    @dish = Dish.find(params[:id])
    @dish.destroy
    flash[:notice] = "Dish Removed."
    redirect_to party_path(@party)
  end

  def most_popular
    @dishes = Dish.most_popular
  end

  private

  def dish_params
    params.require(:dish).permit(:name, :category)
  end
end
