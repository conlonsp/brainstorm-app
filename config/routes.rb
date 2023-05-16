Rails.application.routes.draw do
  
  resources :users, only: [:index]

  resources :ideas, only: [:index, :show, :create, :update, :destroy] do
    resources :comments, only: [:index]
  end
  
  resources :comments, only: [:index, :create, :update, :destroy]

  patch '/ideas/:id/likes', to: 'likes#increment_likes'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/users/:id', to: 'likes#all_likes'
  
  # get '/latestidea', to: 'ideas#latest_idea'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
