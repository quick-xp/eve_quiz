class Api::QuizUserAnswerController < Api::ApiController

  def update
    @question_history = QuestionHistory.find(params[:id])
    if @question_history.history_id.to_s != params[:history_id]
      render json: { result: 'error', message: 'permittion denied' }
    end

    @question_history.update_user_answer(params[:choice_id])
    if @question_history.save
      render json: { result: 'success' }
    else
      render json: { result: 'error', message: @question_history.errors.messages }
    end
  end

end
