class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :likes, :user, :comments
end
