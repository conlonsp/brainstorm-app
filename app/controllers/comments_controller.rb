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

  def update
    user = User.find(session[:user_id])
    comment = Comment.find(params[:id])
    comment.update!(comment_params)
    render json: comment, status: :accepted
  end

  # if comment.user_id == user.id
  #   comment.update!(comment_params)
  #   render json: comment, status: :accepted
  # else
  #   render json: { errors: 'Unauthorized to complete action.' }, status: :unauthorized
  # end

  def destroy
    user = User.find(session[:user_id])
    comment = user.comments.find(params[:id])
    comment.destroy
    head :no_content
  end

  private

  def comment_params
    params.permit(:content, :user_id, :idea_id)
  end

  def render_unprocessable_entity(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end
  
end
