class FoodSerializer < ActiveModel::Serializer
  attributes :id
  has_many :users
  has_many :dishes
  has_many :parties, through: :dishes
  
end
