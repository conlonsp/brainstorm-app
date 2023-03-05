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
end
