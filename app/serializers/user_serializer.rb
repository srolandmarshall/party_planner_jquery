class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :attended_parties, :hosted_parties

end
