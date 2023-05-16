class IdeasController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  before_action :authorize, only: :destroy

  def index
    render json: Idea.all, status: :ok
  end

  def show
    render json: Idea.find(params[:id]), status: :ok
  end

  def create
    idea = Idea.create!(
      title: params[:title],
      content: params[:content],
      likes: 0,
      user_id: session[:user_id]
    )
    render json: idea, status: :created
  end

  def update
    idea = Idea.find(params[:id])
    idea.update!(
      title: params[:title],
      content: params[:content],
      likes: 0,
      user_id: session[:user_id]
    )
    render json: idea, status: :accepted
  end

  def destroy
    user = User.find(session[:user_id])
    idea = user.created_ideas.find_by(id: params[:id])
    idea.destroy
    head :no_content
  end
  
  private

  def authorize
    idea = Idea.find(params[:id])
    return render json: { error: "Unauthorized. User cannot tamper with other user's posts." }, status: :unauthorized unless session[:user_id] == idea.user_id
  end

  def render_unprocessable_entity(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found
    render json: { errors: ['Idea not found'] }, status: :not_found
  end

end
