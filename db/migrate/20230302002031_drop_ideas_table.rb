class DropIdeasTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :ideas
  end
end
