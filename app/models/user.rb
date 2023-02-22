class User < ApplicationRecord
  has_secure_password

  has_many :ideas
  has_many :comments

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :bio, presence: true
  validates :bio, length: { maximum: 250 }
  validates :password, presence: true
  validates :password, length: { 6..20 }
  validates :avatar_url, presence: true
end
