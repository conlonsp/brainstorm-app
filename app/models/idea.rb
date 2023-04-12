class Idea < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :users, through: :comments
  
  validates :title, :content, :user_id, presence: true
end
