class GarmentsController < ApplicationController

before_action :authorize

  def show
    @user = User.find_by(id: params[:user_id])
    @garment = Garment.find_by(id: params[:id])
    @measurement = Measurement.find_by(garment_id: @garment.id)
  end

  def index
    @user = User.find_by(id: params[:user_id])
    @garments = Garment.where(user_id: @user.id)
  end

  def new
    @user = User.find_by(id: params[:user_id])
    @garment = Garment.new
  end

  def create
    @user = User.find_by(id: params[:user_id])
    @garment = Garment.new(garment_params)
    @garment.save
    redirect_to @user
  end

  def edit
    @garment = Garment.find_by(id: params[:id])
    @user = User.find_by(id: params[:user_id])
  end

  def update
    @user = User.find_by(id: params[:user_id])
    @garment = Garment.find_by(id: params[:id])

    @garment.update_attributes(garment_params)
    redirect_to "/users/" + @user.id.to_s
  end

  def destroy
    @user = User.find_by(id: params[:user_id])
    @garment = Garment.find_by(id: params[:id])
    @garment.destroy
    redirect_to "/users/" + @user.id.to_s
  end

private

  def garment_params
    params.require(:garment).permit(:user_id, :title, :brand, :image_url, :notes, :needs_measurements)
  end

end


