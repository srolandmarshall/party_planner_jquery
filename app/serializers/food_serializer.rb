class FoodSerializer < ActiveModel::Serializer
  attributes :id,:name,:category
  has_many :users
  has_many :dishes
  has_many :parties, through: :dishes

end
