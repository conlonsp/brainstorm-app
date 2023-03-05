class IdeaSerializer < ActiveModel::Serializer
  attributes :title, :content, :likes, :user
end
