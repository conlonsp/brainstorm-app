class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :avatar_url, :idea_count, :comment_count,
  :biggest_collab

  has_many :created_ideas
  has_many :ideas
  has_many :comments


  def idea_count
    "#{self.object.created_ideas.count}"
  end

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
end