class Api::QuizResultsController < Api::ApiController

  def show
    @quiz_result = QuestionResult.find_by(history_id: params[:id], finished: true)
  end

end
