class PartySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :host_id, :time, :attendees, :host_name
  has_many :dishes

end
