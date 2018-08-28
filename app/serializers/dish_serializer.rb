class DishSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :party
  belongs_to :food
end
