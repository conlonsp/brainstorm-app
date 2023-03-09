class CommentsController < ApplicationController

  def index
    Comment.all, render json: status: :ok
  end
  
end
