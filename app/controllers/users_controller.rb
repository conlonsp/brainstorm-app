class UsersController < ApplicationController

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: User.find(session[:user_id]), status: :ok
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  def user_invalid(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
  end

  def user_not_found
    render json: { errors: "User not found" }, status: :unauthorized
  end
end
