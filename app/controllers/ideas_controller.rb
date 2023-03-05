class IdeasController < ApplicationController

  # before_action :authorize

  def index
    render json: Idea.all, include: :user, status: :ok
  end

  def show
    render json: Idea.find(params[:id]), status: :ok
  end

  def increment_likes
    idea = Idea.find_by(id: params[:id])
    idea.update(idea.likes + 1)
    render json: idea
  end

  private

  def authorize
    render json: { errors: ["Not Authorized to View Content."] }, status: :unauthorized unless session.include? :user_id
  end

 

end
