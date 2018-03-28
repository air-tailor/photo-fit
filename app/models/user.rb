class User < ApplicationRecord
has_secure_password

  validates :email, presence: true, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  validates :password, presence: true, length: { minimum: 5 }

  has_many :orders, dependent: :destroy

  def is_admin?
    # @TODO Make this better.
    self.email == "orders@airtailor.com"
  end
end