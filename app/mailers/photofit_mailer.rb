class PhotofitMailer < ApplicationMailer

  def measurements_needed
    mail(to: "brian@airtailor.com", subject: "New garment needs measurements")
  end

  def measurements_updated(user, garment)
    @user = user
    @garment = garment
    mail(to: @user.email, subject: "Your Air Tailor PhotoFit measurements have been updated!")
  end

end
