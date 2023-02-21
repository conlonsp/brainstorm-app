class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :likes, :user_id
end
