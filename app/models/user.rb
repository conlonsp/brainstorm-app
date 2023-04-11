class User < ApplicationRecord
  has_secure_password

  has_many :ideas
  has_many :comments, through: :ideas

  validates :username, :password, :avatar_url, :bio, presence: true

  validates :username, uniqueness: true

  validates :password, length: { in: 6..20 }
  validates :bio, length: { maximum: 250 }
end
