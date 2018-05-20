# == Schema Information
#
# Table name: question_histories
#
#  id              :integer          not null, primary key
#  question_id     :integer          not null
#  number          :integer          not null
#  choice_list     :string(255)      not null
#  history_id      :string(255)      not null
#  large_tag_id    :integer          not null
#  medium_tag_id   :integer
#  small_tag_id    :integer
#  user_id         :integer
#  user_choice     :integer
#  user_is_correct :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class QuestionHistory < ActiveRecord::Base
  belongs_to :question

  def self.create_question_history(questions: Question.create_questions, user_id: nil)
    uid = SecureRandom.uuid

    questions.each_with_index do |question, i|
      history = QuestionHistory.new
      history.history_id = uid
      history.question = question
      history.number = i
      history.choice_list = question.choices.shuffle.map(&:id).join(",")
      history.large_tag_id = question.large_tag
      history.medium_tag_id = question.medium_tag
      history.small_tag_id = question.small_tag
      history.user_id = user_id
      history.save
    end

    [uid, QuestionHistory.where(history_id: uid)]
  end

  def update_user_answer(user_choice)
    self.user_choice = user_choice
    self.user_is_correct = false
    choice_list.split(',').each do |choice|
      c = Choice.find(choice)
      if c.is_correct
        if user_choice == c.id
          self.user_is_correct = true
        end
      end
    end

    self.save
  end
end
