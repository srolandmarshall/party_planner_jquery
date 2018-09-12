class DishSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_name
  belongs_to :user
  belongs_to :party
  belongs_to :food
end
