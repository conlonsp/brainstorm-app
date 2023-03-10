class CommentsController < ApplicationController

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


  
end
