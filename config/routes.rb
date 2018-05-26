Rails.application.routes.draw do
  get 'quiz_home/index'
  get 'quiz_results/index'

  resources :quiz, only: [:show]

  namespace :api, defaults: { format: :json } do
    resources :quiz, only: [:index, :update]
  end

end
