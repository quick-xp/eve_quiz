class QuizController < ApplicationController
  def show
    @history_id = params[:id]
  end
end
