json.total @quiz_lists.count

json.quiz do
  json.array!(@quiz_lists) do |quiz|
    json.(quiz,
        :id, :question_id, :number,
    )

    json.extract! quiz.question, :question, :hint, :comment

    json.choice do
      json.array!(quiz.choice_list.split(',')) do |choice|
        json.(Choice.find(choice), :choice)
      end
    end
  end
end


