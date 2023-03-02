class IdeasController < ApplicationController

  def index
    render json: Idea.all, status: :ok
  end
end
