class UsersController < ApplicationController

before_action :authorize, :except => [:new, :create]

  def admin
    @garments = Garment.includes(:measurements).references(:measurements).where('measurements.id IS NULL')
    @users = User.all

  end

  def terms
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
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.assign_attributes(user_params)
    if @user.update_attributes(user_params)
      flash[:success] = "Account updated successfully."
      redirect_to "/users/" + @user.id.to_s
    else
      flash[:fail] = "Unable to update. Please ensure all required fields are filled correctly."
      redirect_to edit_user_path
    end
  end

  def destroy
    å
  end



  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
