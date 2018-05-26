import { FETCH_QUIZ_QUESTION, SET_QUIZ_LISTS } from "../actions/quiz";

const INITIAL_STATE = {
  question: "No1",
  quizLists: []
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_QUIZ_QUESTION:
      return { ...state, question: "No2" };
    case SET_QUIZ_LISTS:
      debugger;
      return Object.assign({}, state, {
        quizLists: action.quizLists
      });
    default:
      return state;
  }
}
