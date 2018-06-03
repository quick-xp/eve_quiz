json.result do |result|
  json.extract! @quiz_result, :id, :total_questions_count, :user_correct_count, :comment, :result_text
  json.extract! @quiz_result.question_list, :title
  json.result_details do
    json.array! JSON.parse(@quiz_result.result_detail_json) do |d|
      json.tag_name d[0]
      json.count d[1]
    end
  end
end
