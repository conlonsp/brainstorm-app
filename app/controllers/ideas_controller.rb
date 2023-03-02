class IdeasController < ApplicationController

  def index
    render json: Ideas.all, status: :ok
  end
end
