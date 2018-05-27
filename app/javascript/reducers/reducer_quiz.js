import { 
  FETCH_QUIZ_REQUEST, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAIL
} from "../actions/quiz";

const INITIAL_STATE = {
  question_no: 1,
  loading: false,
  quizLists: []
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return { ...state, loading: true}
    case FETCH_QUIZ_SUCCESS:
      return Object.assign({}, state, {
        quizLists: action.results,
        loading: false
      });
    case FETCH_QUIZ_FAIL:
      return { ...state, loading: false}
    default:
      return state;
  }
}
