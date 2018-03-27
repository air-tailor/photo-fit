class AddMeasurementsToGarment < ActiveRecord::Migration[5.1]
  def change
    add_column :garments, :needs_measurements, :boolean
  end
end
