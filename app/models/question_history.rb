# == Schema Information
#
# Table name: question_histories
#
#  id              :integer          not null, primary key
#  question_id     :integer          not null
#  number          :integer          not null
#  choice_list     :string(255)      not null
#  history_id      :string(255)      not null
#  user_id         :integer
#  user_choice     :integer
#  user_is_correct :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class QuestionHistory < ActiveRecord::Base
  belongs_to :question
end
