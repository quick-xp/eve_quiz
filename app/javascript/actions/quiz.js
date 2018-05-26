export const FETCH_QUIZ_QUESTION = "FETCH_QUIZ_QUESTION";
export const SET_QUIZ_LISTS = "SET_QUIZ_LISTS";

export function fetchQuestion(questionSeriesNo) {
  return {
    type: FETCH_QUIZ_QUESTION,
    questionSeriesNo
  };
}

export function setQuizLists(quizLists) {
  return {
    type: SET_QUIZ_LISTS,
    quizLists
  };
}
