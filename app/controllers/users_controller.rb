class UsersController < ApplicationController

before_action :authorize, :except => [:new, :create]

  def admin
    if current_user.is_admin?
      @garments = Garment.where(needs_measurements: true)
    else
      redirect_to current_user
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    @garments = Garment.where(user_id: @user.id)
  end

  def index
    if current_user.is_admin?
      @users = User.all
    else
      redirect_to current_user
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to @user
   else
      redirect_to new_user_path
   end
  end





  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
