import api from '../lib/api';

export const FETCH_QUIZ_QUESTION = "FETCH_QUIZ_QUESTION";
export const SET_QUIZ_LISTS = "SET_QUIZ_LISTS";

export function fetchQuestion(questionSeriesNo) {
  return {
    type: FETCH_QUIZ_QUESTION,
    questionSeriesNo
  };
}

export function setQuizLists(historyId) {
  return {
    type: SET_QUIZ_LISTS,
    historyId
  };
}

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

export function fetchQuiz(seasonSlug) {
  return (dispatch, getState) => {
    dispatch(fetchQuizRequest());
    api(getState)
      .get(`/api/seasons/${seasonSlug}/ranking_makers/edit`)
      .then(response => {
        dispatch(fetchQuizSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchQuizFail(error));
      });
  };
}