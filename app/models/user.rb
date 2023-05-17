class User < ApplicationRecord
  has_secure_password

  has_many :comments
  has_many :ideas, through: :comments
  has_many :created_ideas, class_name: "Idea"

  validates :username, :password, :avatar_url, :bio, presence: true

  validates :username, uniqueness: true

  validates :password, length: { in: 6..20 }
  validates :bio, length: { maximum: 250 }

end
