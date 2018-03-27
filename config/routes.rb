Rails.application.routes.draw do
  root "users#admin"

  get '/admin' => 'users#admin'

  resources :users do
    resources :garments do
      resources :measurements
    end
  end

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
end
