class AddColumnsToMeasurements < ActiveRecord::Migration[5.2]
  def change
    add_column :measurements, :sleeve_length, :float
    add_column :measurements, :chest_bust, :float
    add_column :measurements, :upper_torso, :float
    add_column :measurements, :waist, :float
    add_column :measurements, :back_width, :float
    add_column :measurements, :bicep, :float
    add_column :measurements, :forearm, :float
    add_column :measurements, :wrist, :float
    add_column :measurements, :elbow, :float
    add_column :measurements, :shoulder_to_waist, :float
  end
end
