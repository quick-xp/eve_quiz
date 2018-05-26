class QuizController < ApplicationController
  def show
    #@quiz_lists = QuestionHistory
    #  .where(history_id: params[:id]).order(number: :asc)
    @history_id = params[:id]
  end
end
