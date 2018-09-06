class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :attended_parties, :upcoming_parties, :all_parties, :hosted_parties

end
