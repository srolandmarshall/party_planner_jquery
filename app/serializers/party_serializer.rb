class PartySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :host_id, :time, :attendees, :dishes


end
