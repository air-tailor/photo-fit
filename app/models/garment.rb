class Garment < ApplicationRecord
  belongs_to :user
  has_many :measurements, dependent: :destroy

  validates :title, presence: true, allow_blank: false
  validates :image_url, presence: true, allow_blank: false

  mount_uploader :image_url, ImageUploader
end
