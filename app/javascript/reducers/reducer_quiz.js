import { 
  FETCH_QUIZ_QUESTION, SET_QUIZ_LISTS,
  FETCH_QUIZ_REQUEST, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAIL
} from "../actions/quiz";

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
      return Object.assign({}, state, {
        historyId: action.historyId,
        quizLists: action.quizLists
      });
    case FETCH_QUIZ_REQUEST:
      state = state.set('loading', true);
      return state;
    case FETCH_QUIZ_SUCCESS:
      state = state.set('loading', false);
      return Object.assign({}, state, {
        quizLists: action.results
      });
    case FETCH_QUIZ_FAIL:
      state = state.set('loading', false);
      return state;
    default:
      return state;
  }
}
