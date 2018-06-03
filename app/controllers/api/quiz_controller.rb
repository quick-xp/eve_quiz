class Api::QuizController < Api::ApiController

  def index
    @quiz_lists = QuestionHistory
      .where(history_id: params[:history_id]).order(number: :asc)
  end

end
