Rails.application.routes.draw do
  # get 'uploads/new'

  # get 'uploads/create'

  # get 'uploads/index'

  # root "users#admin"

  # get '/admin' => 'users#admin'

  root "users#show"

  # resources :uploads


  resources :users do
    resources :garments do
      resources :measurements
    end
  end


  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
end
