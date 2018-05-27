import api from '../lib/api';

export const FETCH_QUIZ_REQUEST = "FETCH_QUIZ_REQUEST";
export const FETCH_QUIZ_SUCCESS = "FETCH_QUIZ_SUCCESS";
export const FETCH_QUIZ_FAIL = "FETCH_QUIZ_FAIL";

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