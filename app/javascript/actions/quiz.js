import api from '../lib/api';

export const FETCH_QUIZ_REQUEST = "FETCH_QUIZ_REQUEST";
export const FETCH_QUIZ_SUCCESS = "FETCH_QUIZ_SUCCESS";
export const FETCH_QUIZ_FAIL = "FETCH_QUIZ_FAIL";
export const UPDATE_CHOICE_ANSWER_REQUEST = "UPDATE_CHOICE_ANSWER_REQUEST";
export const UPDATE_CHOICE_ANSWER_SUCCESS = "UPDATE_CHOICE_ANSWER_SUCCESS";
export const UPDATE_CHOICE_ANSWER_FAIL = "UPDATE_CHOICE_ANSWER_FAIL";

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
    updateChoiceAnswerRequest();
    const requestBody = {
      history_id: historyId,
      choice_id: choiceId,
    };
    api(getState)
      .put(`/api/quiz_user_answer/${questionHistoryId}`, requestBody)
      .then(response => {
        dispatch(choiceAnswerSuccess(response.data));
      })
      .catch(error => {
        dispatch(choiceAnswerFail(error));
      });
  };  
}
