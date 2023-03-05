class IdeasController < ApplicationController

  # before_action :authorize

  def index
    render json: Idea.all, include: :user, status: :ok
  end

  def show
    render json: Idea.find(params[:id]), status: :ok
  end

  private

  def authorize
    render json: { errors: ["Not Authorized to View Content."] }, status: :unauthorized unless session.include? :user_id
  end

 

end
