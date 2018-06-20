class RemoveImageUrlFromGarments < ActiveRecord::Migration[5.2]
  def change
    remove_column :garments, :image_url, :string
  end
end
