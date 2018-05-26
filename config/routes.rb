Rails.application.routes.draw do
  get 'quiz_home/index'
  get 'quiz_results/index'

  resources :quiz, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
