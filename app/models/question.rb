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
  attr_accessor :large_tag_id, :medium_tag_id, :small_tag_id

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
        q.large_tag_id = category.id
        questions << q
        count = count + 1
      end
    end

    questions.shuffle.last(number)
  end

  # TODO 後で移動
  def self.save_screen
    options = Selenium::WebDriver::Chrome::Options.new
    options.add_argument("--window-size=400,520")
    options.add_argument('--headless')
    driver = Selenium::WebDriver.for :chrome, options: options
    driver.navigate.to 'http://localhost:3000/quiz_results/index'
    driver.save_screenshot '/tmp/test.png'
  end
end
