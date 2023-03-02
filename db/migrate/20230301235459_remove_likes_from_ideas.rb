class RemoveLikesFromIdeas < ActiveRecord::Migration[6.1]
  def change
    remove_column :ideas, :likes, :integer
  end
end
