Rails.application.routes.draw do


  # root "users#admin"



  root "users#show"




  resources :users do
    resources :garments do
      resources :measurements
    end
  end

   get '/admin' => 'users#admin'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
end
