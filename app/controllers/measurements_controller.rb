class MeasurementsController < ApplicationController

before_action :authorize

  def show

  end

  def index

  end

  def new
    @user = User.where(:id => params[:user_id]).first
    @garment = Garment.where(:id => params[:garment_id]).first
    @measurement = Measurement.new

  end

  def create
    @user = User.where(:id => params[:user_id]).first
    @garment = Garment.where(:id => params[:garment_id]).first
    @measurement = Measurement.new(measurement_params)

    if @measurement.save
      PhotofitMailer.measurements_updated(@user, @garment).deliver!
      redirect_to "/admin"
    else
      @garment.errors.full_messages.each do |message|
        flash[:fail] = "Error: " + message
      end

      redirect_to "/users/" + @user.id.to_s + "/garments/" + @garment.id.to_s + "/measurements/new"
    end
  end

  def edit

  end

  def update

  end

private

  def measurement_params
    params.require(:measurement).permit(:garment_id, :hips, :outseam, :thigh, :knee, :calf, :ankle, :inseam, :conversion_rate, :chest_bust, :upper_torso, :waist, :back_width, :bicep, :forearm, :wrist, :elbow, :shoulder_to_waist)
  end

end



