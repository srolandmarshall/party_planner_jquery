module ApplicationHelper
  def display_dish(dish)
    if dish.user_name
      dish.name+" - "+dish.user_name
    else
      dish.name+" - "
    end
  end
end
