class CreateIdeasTable < ActiveRecord::Migration[6.1]
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :content
      t.integer :likes, null: false, default: 0
      t.integer :user_id

      t.timestamps
    end
  end
end
