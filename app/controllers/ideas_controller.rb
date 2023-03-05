class IdeasController < ApplicationController

  before_action :authorize

  def index
    render json: Idea.all, include: :user, status: :ok
  end

  private

  def authorize
    render json: { errors: ["Not Authorized to View Content."] }, status: :unauthorized unless session.include? :user_id
  end

  def increment_likes
    idea = idea.find_by(id: params[:id])
    if idea
      idea.update(idea.likes + 1)
      render json: idea
    end
  end
  
end
