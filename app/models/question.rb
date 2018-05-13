# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  question   :text(65535)      not null
#  hint       :text(65535)
#  comment    :text(65535)
#  status     :integer          default(0), not null
#  difficult  :integer          default(1), not null
#  created_by :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base
  acts_as_taggable # Alias for acts_as_taggable_on :tags
  acts_as_taggable_on :categories

  has_many :choices

  def self.create_questions(number: 10, min_difficult: 1, max_difficult: 5)
    categories = Question.tags_on(:categories)

    # カテゴリごとの問題個数
    categories_question_count = (number / categories.count).to_i + 1
    questions = []

    categories.each do |category|
      c_questions = Question.where("difficult >= ? and difficult <= ?", min_difficult, max_difficult).tagged_with(category.name)
      c_questions.shuffle

      count = 0
      c_questions.each do |q|
        break if count > categories_question_count
        questions << q
        count = count + 1
      end
    end

    questions.shuffle.last(number)
  end
end
