class AddLikesToIdeas < ActiveRecord::Migration[6.1]
  def change
    add_column :ideas, :likes, :integer
    add_reference :ideas, :likes, null: false, default: 0
  end
end
