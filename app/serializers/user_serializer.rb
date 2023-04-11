class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :avatar_url, :idea_count, :comment_count

  has_many :ideas
  has_many :comments

  def idea_count
    "#{self.object.ideas.count}"
  end

  def comment_count
    "#{self.object.comments.count}"
  end
end