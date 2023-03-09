class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :idea_id

  belongs_to :user
  belongs_to :idea
end
