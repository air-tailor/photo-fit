class Garment < ApplicationRecord
  belongs_to :user
  has_many :measurements, dependent: :destroy

  mount_uploader :image_url, ImageUploader
end
