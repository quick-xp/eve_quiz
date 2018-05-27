import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAIL,
  UPDATE_CHOICE_ANSWER_REQUEST,
  UPDATE_CHOICE_ANSWER_SUCCESS,
  UPDATE_CHOICE_ANSWER_FAIL
} from "../actions/quiz";

const INITIAL_STATE = {
  quizNo: 1,
  loading: false,
  quizTotalCount: 1,
  quizLists: []
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUIZ_SUCCESS:
      return Object.assign({}, state, {
        quizTotalCount: action.results.total,
        quizLists: action.results.quiz,
        loading: false
      });
    case FETCH_QUIZ_FAIL:
      return { ...state, loading: false };
    case UPDATE_CHOICE_ANSWER_REQUEST:
      return { ...state, loading: true };
    case UPDATE_CHOICE_ANSWER_SUCCESS:
      return { ...state, quizNo: state.quizNo + 1, loading: true };
    case UPDATE_CHOICE_ANSWER_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
}
