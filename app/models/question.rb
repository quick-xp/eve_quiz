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
end
