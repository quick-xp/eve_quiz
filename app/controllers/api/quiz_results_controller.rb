class Api::QuizResultsController < Api::ApiController

  def show
    @quiz_result = QuizResult.find(history_id: params[:history_id])
  end

end
