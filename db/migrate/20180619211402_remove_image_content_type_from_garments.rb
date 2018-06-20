class RemoveImageContentTypeFromGarments < ActiveRecord::Migration[5.2]
  def change
    remove_column :garments, :image_content_type, :string
  end
end
