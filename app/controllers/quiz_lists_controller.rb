class QuizListsController < ApplicationController
  def show
    @question_list = QuestionList.find(params[:id])
    @is_login = false
  end
end
