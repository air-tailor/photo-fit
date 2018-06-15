class GarmentsController < ApplicationController

before_action :authorize

  def show
    @user = current_user
    @garment = Garment.find(params[:id])
    @measurement = Measurement.where(garment_id: @garment.id).first

  end

  def index

  end

  def new
    @user = current_user
    @garment = Garment.new
  end

  def create
    @user = current_user
    @garment = Garment.new(garment_params)

    if @garment.save
      redirect_to @user
    else
      @garment.errors.full_messages.each do |message|
        flash[:fail] = "Error: " + message
      end
      redirect_to new_user_garment_path(@user)
    end
  end

  def edit
    @user = current_user
    @garment = Garment.find(params[:id])

  end

  def update

  end

  def destroy

  end

private

  def garment_params
    params.require(:garment).permit(:user_id, :title, :brand, :image, :image_url, :notes, :needs_measurements)
  end

end


