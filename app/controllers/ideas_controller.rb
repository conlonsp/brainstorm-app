class IdeasController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  before_action :authorize

  def index
    render json: Idea.all, include: :user, status: :ok
  end

  def show
    render json: Idea.find(params[:id]), status: :ok
  end

  def create
    idea = Idea.create!(idea_params)
    render json: idea, status: :created
  end

  private

  def idea_params
    params.permit(:title, :content, :likes, :user_id)
  end

  def authorize
    render json: { errors: ["Not Authorized to View Content."] }, status: :unauthorized unless session.include? :user_id
  end

  def render_unprocessable_entity(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

end
