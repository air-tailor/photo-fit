class RemoveImageFileSizeFromGarments < ActiveRecord::Migration[5.2]
  def change
    remove_column :garments, :image_file_size, :integer
  end
end
