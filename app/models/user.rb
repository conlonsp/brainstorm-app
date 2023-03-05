class User < ApplicationRecord
  has_secure_password

  has_many :ideas
  has_many :comments

  validates :username, presence: true
  validates :password, presence: true
  validates :avatar_url, presence: true
  validates :bio, presence: true

  validates :username, uniqueness: true

  validates :password, length: { in: 6..20 }
  validates :bio, length: { maximum: 250 }
end
