class MeasurementsController < ApplicationController

before_action :authorize

  def show
    @measurement = Measurement.find_by(id: params[:id])
  end

  def index
    @measurements = Measurement.all
  end

  def new
    if current_user.is_admin?
      @garment = Garment.find_by(id: params[:garment_id])
      @measurement = Measurement.new
    else
      redirect_to @user
    end
  end

  def create
    @user = User.find_by(id: params[:user_id])
    @garment = Garment.find_by(id: params[:garment_id])
    @measurement = Measurement.new(measurement_params)

    @measurement.save

    @garment.update_attribute(:needs_measurements, false)
    redirect_to "/users/" + @user.id.to_s
  end

  def edit
    if current_user.is_admin?
      @garment = Garment.find_by(id: params[:garment_id])
      @measurement = Measurement.find_by(garment_id: @garment.id)
    else
      redirect_to @user
    end
  end

  def update
    @user = User.find_by(id: params[:user_id])
    @garment = Garment.find_by(id: params[:garment_id])
    @measurement = Measurement.find_by(garment_id: @garment.id)

    @measurement.update_attributes(measurement_params)
    @garment.update_attribute(:needs_measurements, false)
    redirect_to "/users/" + @user.id.to_s
  end

private

  def measurement_params
    params.require(:measurement).permit(:garment_id, :hips, :outseam, :thigh, :knee, :calf, :ankle, :inseam, :conversion_rate)
  end

end


