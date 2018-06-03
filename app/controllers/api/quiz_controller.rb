class Api::QuizController < Api::ApiController

  def index
    @quiz_lists = QuestionHistory
      .where(history_id: params[:history_id]).order(number: :asc)
  end

  def create
    question_list_id = params[:question_list_id]
    questions = Question.create_questions
    @uid = QuestionHistory.create_question_history(questions: questions, question_list_id: question_list_id)

    render json: { historyId: @uid }
  end

end
