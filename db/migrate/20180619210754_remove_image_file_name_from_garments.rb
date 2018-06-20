class RemoveImageFileNameFromGarments < ActiveRecord::Migration[5.2]
  def change
    remove_column :garments, :image_file_name, :string
  end
end
