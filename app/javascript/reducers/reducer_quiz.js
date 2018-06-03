import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAIL,
  UPDATE_CHOICE_ANSWER_REQUEST,
  UPDATE_CHOICE_ANSWER_SUCCESS,
  UPDATE_CHOICE_ANSWER_FAIL,
  FETCH_QUIZ_RESULT_REQUEST,
  FETCH_QUIZ_RESULT_SUCCESS,
  FETCH_QUIZ_RESULT_FAIL,
  CLEAR_HISTORY_ID,
  CREATE_QUIZ_REQUEST,
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAIL
} from "../actions/quiz";

const INITIAL_STATE = {
  quizNo: 1,
  loading: false,
  quizTotalCount: 1,
  quizLists: [],
  isCompleted: false,
  resultDetails: [],
  historyId: null
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
      let isCompleted = false;
      let nextquizNo = state.quizNo;
      if (state.quizNo + 1 > state.quizTotalCount) {
        isCompleted = true;
      } else {
        nextquizNo = nextquizNo + 1;
      }
      return {
        ...state,
        quizNo: nextquizNo,
        loading: false,
        isCompleted: isCompleted
      };
    case UPDATE_CHOICE_ANSWER_FAIL:
      return { ...state, loading: false };
    case FETCH_QUIZ_RESULT_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUIZ_RESULT_SUCCESS:
      return Object.assign({}, state, {
        totalQuestionCount: action.results.total_questions_count,
        userCorrectCount: action.results.user_correct_count,
        comment: action.results.comment,
        resultText: action.results.result_text,
        title: action.results.title,
        resultDetails: action.results.result_details,
        loading: false
      });
    case CLEAR_HISTORY_ID:
      return { ...state, historyId: null };
    case CREATE_QUIZ_REQUEST:
      return { ...state, loading: true };
    case CREATE_QUIZ_SUCCESS:
      return Object.assign({}, state, {
        historyId: action.results.historyId,
        loading: false
      });
    case CREATE_QUIZ_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
}
