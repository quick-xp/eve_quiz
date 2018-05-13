# == Schema Information
#
# Table name: choices
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  is_correct  :boolean          not null
#  choice      :string(255)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Choice < ActiveRecord::Base
  belongs_to :question
end
