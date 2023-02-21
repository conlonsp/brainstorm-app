class CreateIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :content
      t.string :likes
      t.integer :user_id

      t.timestamps
    end
  end
end
