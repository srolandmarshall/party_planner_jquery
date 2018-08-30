class PartySerializer < ActiveModel::Serializer
  has_many :users
  has_many :drinks
  belongs_to :host, class_name: 'User'
  has_and_belongs_to_many :attendees, class_name: 'User'
  has_many :dishes
  has_many :foods, through: :dishes
  attributes :id, :name, :address, :host_id, :time
end
