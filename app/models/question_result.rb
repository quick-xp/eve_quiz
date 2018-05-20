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
end
