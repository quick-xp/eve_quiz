# == Schema Information
#
# Table name: question_lists
#
#  id         :integer          not null, primary key
#  title      :text(65535)      not null
#  comment    :text(65535)
#  status     :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class QuestionList < ActiveRecord::Base
end
