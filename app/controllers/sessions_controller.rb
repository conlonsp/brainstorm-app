class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized

  def create
    user = User.find_by!(username: params[:username])
    user&.authenticate(params[:password])
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def destroy
    session[:user_id]
    session.delete :user_id
    head :no_content
    # else
    #   render json: { errors: ['Please log in'] }, status: :unauthorized
    # end
  end

  private

  def render_unauthorized
    render json: { errors: ["Invalid username or password"] }, status: :unauthorized unless session.include? :user_id
  end
end
