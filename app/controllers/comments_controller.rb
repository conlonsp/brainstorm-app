class CommentsController < ApplicationController

  def index
    render json: Comment.all, status: :ok
  end
  
end
