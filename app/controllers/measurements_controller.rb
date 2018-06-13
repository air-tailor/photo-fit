class MeasurementsController < ApplicationController

before_action :authorize

  def show

  end

  def index

  end

  def new

  end

  def create

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


