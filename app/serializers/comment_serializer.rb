class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :idea_id
end
