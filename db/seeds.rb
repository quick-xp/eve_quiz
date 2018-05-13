require 'csv'

Question.delete_all
header = true
CSV.foreach('db/test_data.csv') do |row|
  if header
    header = false
    next
  end

  q = Question.new
  q.question = row[0]
  q.hint = row[1]
  q.comment = row[2]
  q.status = row[4]
  q.category_list = row[5]
  q.difficult = row[6]
  q.choices.build(is_correct: true, choice: row[7])
  q.choices.build(is_correct: false, choice: row[8])
  q.choices.build(is_correct: false, choice: row[9])
  q.choices.build(is_correct: false, choice: row[10])
  q.save
end
