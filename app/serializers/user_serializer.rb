class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :avatar_url, :comment_count,
  :biggest_collab, :idea_comments

  has_many :created_ideas
  # has_many :ideas
  # has_many :comments

  def comment_count
    "#{self.object.comments.count}"
  end

  def biggest_collab
    arr = self.object.ideas.map{|idea| idea.user_id}
    collab_id = arr.max_by{|i| arr.count(i)}
    if collab_id
      User.find(collab_id).username
    else
      nil
    end
  end

  def idea_comments
    user_comments = object.comments.includes(:idea)
    user_comments.map do |comment|
      {
        idea_id: comment.idea.id,
        idea_title: comment.idea.title,
        comment_content: comment.content
      }
    end
  end

end