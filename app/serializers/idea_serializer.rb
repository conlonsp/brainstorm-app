class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :likes, :user_id

  belongs_to :user
  has_many :comments
  has_many :users
end
