class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :likes

  belongs_to :user
  has_many :comments
end
