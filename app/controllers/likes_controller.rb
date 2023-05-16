class LikesController < ApplicationController

  before_action :authorize, only: :increment_likes

  def increment_likes
    idea = Idea.find_by(id: params[:id])
    idea.update(likes: idea.likes + 1)
    render json: idea, status: :accepted
  end

  def all_likes
    user = User.find_by(id: params[:id])
    if user
      likes = user.ideas.map {|idea| idea.likes}
      all_likes = likes.sum
      render json: all_likes
    end
  end

  private

  def authorize
    idea = Idea.find(params[:id])
    return render json: { error: "Unauthorized. User cannot like their own posts." }, status: :unauthorized unless session[:user_id] != idea.user_id
  end

end