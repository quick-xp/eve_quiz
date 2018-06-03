import api from "../lib/api";

export const FETCH_QUIZ_REQUEST = "FETCH_QUIZ_REQUEST";
export const FETCH_QUIZ_SUCCESS = "FETCH_QUIZ_SUCCESS";
export const FETCH_QUIZ_FAIL = "FETCH_QUIZ_FAIL";
export const UPDATE_CHOICE_ANSWER_REQUEST = "UPDATE_CHOICE_ANSWER_REQUEST";
export const UPDATE_CHOICE_ANSWER_SUCCESS = "UPDATE_CHOICE_ANSWER_SUCCESS";
export const UPDATE_CHOICE_ANSWER_FAIL = "UPDATE_CHOICE_ANSWER_FAIL";
export const FETCH_QUIZ_RESULT_REQUEST = "FETCH_QUIZ_RESULT_REQUEST";
export const FETCH_QUIZ_RESULT_SUCCESS = "FETCH_QUIZ_RESULT_SUCCESS";
export const FETCH_QUIZ_RESULT_FAIL = "FETCH_QUIZ_RESULT_FAIL";
export const CLEAR_HISTORY_ID = "CLEAR_HISTORY_ID";
export const CREATE_QUIZ_REQUEST = "CREATE_QUIZ_REQUEST";
export const CREATE_QUIZ_SUCCESS = "CREATE_QUIZ_SUCCESS";
export const CREATE_QUIZ_FAIL = "CREATE_QUIZ_FAIL";

export function fetchQuizRequest() {
  return {
    type: FETCH_QUIZ_REQUEST
  };
}

export function fetchQuizSuccess(results) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    results
  };
}

export function fetchQuizFail(error) {
  return {
    type: FETCH_QUIZ_FAIL,
    error
  };
}

export function fetchQuiz(historyId) {
  return (dispatch, getState) => {
    dispatch(fetchQuizRequest());
    api(getState)
      .get(`/api/quiz?history_id=${historyId}`)
      .then(response => {
        dispatch(fetchQuizSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchQuizFail(error));
      });
  };
}

export function updateChoiceAnswerRequest() {
  return {
    type: UPDATE_CHOICE_ANSWER_REQUEST
  };
}

export function updateChoiceAnswerSuccess(results) {
  return {
    type: UPDATE_CHOICE_ANSWER_SUCCESS,
    results
  };
}

export function updateChoiceAnswerFail(error) {
  return {
    type: UPDATE_CHOICE_ANSWER_FAIL,
    error
  };
}

export function updateChoiceAnswer(questionHistoryId, historyId, choiceId) {
  return (dispatch, getState) => {
    dispatch(updateChoiceAnswerRequest());
    const requestBody = {
      history_id: historyId,
      choice_id: choiceId
    };
    api(getState)
      .put(`/api/quiz_user_answer/${questionHistoryId}`, requestBody)
      .then(response => {
        dispatch(updateChoiceAnswerSuccess(response.data));
      })
      .catch(error => {
        dispatch(updateChoiceAnswerFail(error));
      });
  };
}

export function fetchQuizResultRequest() {
  return {
    type: FETCH_QUIZ_RESULT_REQUEST
  };
}

export function fetchQuizResultSuccess(results) {
  return {
    type: FETCH_QUIZ_RESULT_SUCCESS,
    results
  };
}

export function fetchQuizResultFail(error) {
  return {
    type: FETCH_QUIZ_RESULT_FAIL,
    error
  };
}

export function fetchQuizResult(historyId) {
  return (dispatch, getState) => {
    dispatch(fetchQuizResultRequest());
    api(getState)
      .get(`/api/quiz_results/${historyId}`)
      .then(response => {
        dispatch(fetchQuizResultSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchQuizResultFail(error));
      });
  };
}

export function clearHistoryId() {
  return {
    type: CLEAR_HISTORY_ID
  };
}

export function createQuizRequest() {
  return {
    type: CREATE_QUIZ_REQUEST
  };
}

export function createQuizSuccess(results) {
  return {
    type: CREATE_QUIZ_SUCCESS,
    results
  };
}

export function createQuizFail(error) {
  return {
    type: CREATE_QUIZ_FAIL,
    error
  };
}

export function createQuiz(quizListId) {
  return (dispatch, getState) => {
    dispatch(createQuizRequest());
    const requestBody = {
      question_list_id: quizListId
    };
    api(getState)
      .post(`/api/quiz/`, requestBody)
      .then(response => {
        dispatch(createQuizSuccess(response.data));
      })
      .catch(error => {
        dispatch(createQuizFail(error));
      });
  };
}
