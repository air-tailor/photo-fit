class AddConversionToMeasurements < ActiveRecord::Migration[5.1]
  def change
    add_column :measurements, :conversion_rate, :float
  end
end
