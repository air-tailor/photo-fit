class CreateMeasurements < ActiveRecord::Migration[5.1]
  def change
    create_table :measurements do |t|
      t.references :garment, index: true, foreign_key: true
      t.float :hips
      t.float :outseam
      t.float :thigh
      t.float :knee
      t.float :calf
      t.float :ankle
      t.float :inseam

      t.timestamps
    end
  end
end

