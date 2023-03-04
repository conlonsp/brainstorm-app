class IdeasController < ApplicationController

  before_action :authorize

  def index
    render json: Idea.all, status: :ok
  end

  private

  def authorize
    render json: { errors: ["Not Authorized to View Content.  Please Log In to Continue"] }, status: :unauthorized unless session.include? :user_id
  end
end
