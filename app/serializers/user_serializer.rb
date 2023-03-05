class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :avatar_url
end
