class User < ApplicationRecord
has_secure_password

  validates :email, presence: true, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  validates :password, presence: true, length: { minimum: 5 }

  has_many :garments, dependent: :destroy

  before_save { |user| user.email = email.downcase }

  def is_admin?
    # @TODO Make this better.
    self.email == "brian@airtailor.com"
  end
end

