class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :all_parties, :attended_parties, :attending_parties, :hosted_parties

end
