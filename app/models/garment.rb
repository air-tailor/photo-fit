class Garment < ApplicationRecord
  belongs_to :user, optional: true
  has_many :measurements, dependent: :destroy

  validates :title, presence: true, allow_blank: false

  has_one_attached :image


end
