class AddImageToGarment < ActiveRecord::Migration[5.1]
    def self.up
      add_attachment :garments, :image
    end

    def self.down
      remove_attachment :garments, :image
    end
end
