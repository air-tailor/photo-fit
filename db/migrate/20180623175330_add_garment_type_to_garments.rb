class AddGarmentTypeToGarments < ActiveRecord::Migration[5.2]
  def change
    add_column :garments, :garment_type, :string
  end
end
