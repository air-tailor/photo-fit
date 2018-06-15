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
    @user = current_user
    @garment = Garment.where(:id => params[:garment_id]).first
    @measurement = Measurement.new(measurement_params)

    if @measurement.save
      redirect_to "/users/" + @user.id.to_s + "/garments/" + @garment.id.to_s
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
    params.require(:measurement).permit(:garment_id, :hips, :outseam, :thigh, :knee, :calf, :ankle, :inseam, :conversion_rate)
  end

end



