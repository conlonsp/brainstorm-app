class ApplicationController < ActionController::API
  include ActionController::Cookies

  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # before_action :authorize

  # private

  # def render_unprocessable_entity(e)
  #   render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
  # end

  # def authorize
  #   render json: { errors: ["Unauthorized"] }, status: :unauthorized unless session.include? :user_id
  # end
end
