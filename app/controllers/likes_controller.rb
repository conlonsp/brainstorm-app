class LikesController < ApplicationController

  def increment_likes
    idea = Idea.find_by(id: params[:id])
    if idea
      idea.update(likes: idea.likes + 1)
      render json: idea, status: :accepted
    else
      render json: { errors: ['Idea not found.'] }, status: :not_found
    end
  end

  def all_likes
    user = User.find_by(id: params[:id])
    if user
      likes = user.ideas.map {|idea| idea.likes}
      all_likes = likes.sum
      render json: all_likes
    end
  end

end

# likes = user.ideas.map do |idea|
#   idea.likes
# end