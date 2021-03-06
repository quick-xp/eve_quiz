# == Schema Information
#
# Table name: question_histories
#
#  id                 :integer          not null, primary key
#  question_id        :integer          not null
#  number             :integer          not null
#  choice_list        :string(255)      not null
#  history_id         :string(255)      not null
#  question_result_id :integer          not null
#  large_tag_id       :integer          not null
#  medium_tag_id      :integer
#  small_tag_id       :integer
#  user_id            :integer
#  user_choice        :integer
#  user_is_correct    :boolean
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class QuestionHistory < ActiveRecord::Base
  belongs_to :question
  belongs_to :question_result
  belongs_to :large_tag, class_name: "ActsAsTaggableOn::Tag", foreign_key: :large_tag_id
  belongs_to :medium_tag, class_name: "ActsAsTaggableOn::Tag", foreign_key: :large_tag_id, optional: true
  belongs_to :small_tag, class_name: "ActsAsTaggableOn::Tag", foreign_key: :large_tag_id, optional: true

  def self.create_question_history(questions: Question.create_questions, user_id: nil, question_list_id: 1)
    uid = SecureRandom.uuid

    result = QuestionResult.new
    result.attributes = {
      question_list_id: QuestionList.find(question_list_id).id,
      user_id: user_id,
      total_questions_count: questions.length,
      history_id: uid,
    }
    result.save!
    result.reload

    questions.each_with_index do |question, i|
      history = QuestionHistory.new
      history.history_id = uid
      history.question = question
      history.question_result = result
      history.number = i
      history.choice_list = question.choices.shuffle.map(&:id).join(",")
      history.large_tag_id = question.large_tag_id
      history.medium_tag_id = question.medium_tag_id
      history.small_tag_id = question.small_tag_id
      history.user_id = user_id
      history.save!
    end

    uid
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

    self
  end

  def complete
    question_result = self.question_result
    if question_result.total_questions_count <= self.number + 1
      question_result.complete
    end
  end
end
