class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :idea

  validates :content, presence: true
  validates :user_id, presence: true
  validates :idea_id, presence: true
end
