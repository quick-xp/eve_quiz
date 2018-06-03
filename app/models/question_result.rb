# == Schema Information
#
# Table name: question_results
#
#  id                    :integer          not null, primary key
#  question_list_id      :integer          not null
#  user_id               :integer
#  finished              :boolean          default(FALSE), not null
#  total_questions_count :integer          default(0), not null
#  user_correct_count    :integer          default(0), not null
#  comment               :text(65535)
#  result_text           :string(255)
#  result_detail_json    :text(65535)
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class QuestionResult < ActiveRecord::Base
  has_many :question_histories
  belongs_to :question_list

  def complete
    self.finished = true
    histories = self.question_histories
    result_detail_hash = {}
    correct_count = 0

    histories.each do |history|
      self.history_id = history.history_id
      if result_detail_hash[history.large_tag.name].nil?
        result_detail_hash[history.large_tag.name] = 0
      end

      if history.user_is_correct
        correct_count += 1
        result_detail_hash[history.large_tag.name] = result_detail_hash[history.large_tag.name] + 1
      end
    end

    self.user_correct_count = correct_count
    self.result_detail_json = result_detail_hash.to_json

    self.comment = create_comment
    self.result_text = create_result_text

    self.save
  end

  def create_comment
    if correct_percent >= 80
      return '素晴らしいEve知識力です。大抵のことは熟知しているためゲーム内で困ることは少ないでしょう。'
    elsif correct_percent >= 60
      return 'まずまずのEve知識力です。多くの問題を解いてもっと知識を深めましょう。'
    elsif correct_percent >= 40
      return 'ある程度のEve知識力です。Wikiなどを読んでさらなる理解を深めましょう。'
    else
      return 'もっと勉強しましょう！！'
    end
  end

  def create_result_text
    if correct_percent == 100
      return 'Perfect'
    elsif correct_percent >= 95
      return 'S+'
    elsif correct_percent >= 90
      return 'S'
    elsif correct_percent >= 80
      return 'A'
    elsif correct_percent >= 60
      return 'B'
    elsif correct_percent >= 40
      return 'C'
    else
      return 'D'
    end
  end

  def correct_percent
    ((self.user_correct_count.to_f / self.total_questions_count.to_f).to_f * 100).to_i
  end
end
