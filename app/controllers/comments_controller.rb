class CommentsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index
    if params[:idea_id]
      idea = Idea.find(params[:idea_id])
      comments = idea.comments
    else
      comments = Comment.all
    end
    render json: comments, include: [:idea, :user], status: :ok
  end

  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  private

  def comment_params
    params.permit(:content, :user_id, :idea_id)
  end

  def render_unprocessable_entity(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end
  
end
