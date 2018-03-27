class CreateGarments < ActiveRecord::Migration[5.1]
  def change
    create_table :garments do |t|
      t.references :user, index: true, foreign_key: true
      t.string :title
      t.string :brand
      t.string :image_url
      t.text :notes

      t.timestamps null: false
    end
  end
end

