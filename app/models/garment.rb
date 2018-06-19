class Garment < ApplicationRecord
  belongs_to :user, optional: true
  has_many :measurements, dependent: :destroy

  validates :title, presence: true, allow_blank: false
  validates_presence_of :image

  has_one_attached :image


end
