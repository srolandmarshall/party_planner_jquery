class UserSerializer < ActiveModel::Serializer
  attributes :id
  has_many :parties
  has_and_belongs_to_many :attended_parties, class_name: 'Party'
  has_many :dishes
end
