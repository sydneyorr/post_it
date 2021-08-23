class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :author
      t.text :description

      t.timestamps
    end
  end
end
