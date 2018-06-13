class UsersController < ApplicationController

before_action :authorize, :except => [:new, :create]

  def admin

  end

  def show
    @user = current_user
    @garments = Garment.where(user_id: @user.id).all
  end

  def index

  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    @user.email.downcase!

    if @user.save
      session[:user_id] = @user.id
      redirect_to @user
   else
      redirect_to new_user_path
   end
  end

  def edit

  end

  def update

  end

  def destroy
    å
  end



  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
