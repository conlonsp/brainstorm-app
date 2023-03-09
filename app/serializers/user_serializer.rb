class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :avatar_url

  has_many :ideas
  has_many :comments, through: :ideas
end
