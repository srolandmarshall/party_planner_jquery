Rails.application.routes.draw do

  resources :foods
  devise_for :users, :path => '', :path_names => {
    :sign_in => "login",
    :sign_out => "logout",
    :sign_up => "register"
  },
  :controllers => {omniauth_callbacks: 'users/omniauth_callbacks', registrations: 'registrations'}
  resources :users do
    resources :dishes, only: [:show, :index]
    resources :attended_parties, only: [:show, :index]
  end
  resources :parties do
    resources :dishes, only: [:new, :create, :edit, :update]
  end
  post 'parties/:id/dishes/new' => 'dishes#create'
  get '/dishes/most_popular' => 'dishes#most_popular'
  devise_scope :user do
    # using login path for registration
    get '/login' => 'registrations#new'
    post '/signup' => 'registrations#create'
    post '/signin' => 'sessions#create'
    get '/logout' => 'sessions#destroy'
  end
  root 'parties#index'
end
