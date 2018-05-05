export const FETCH_QUIZ_QUESTION = 'FETCH_QUIZ_QUESTION';

export function fetchQuestion(questionSeriesNo) {
    return {
      type: FETCH_QUIZ_QUESTION,
      questionSeriesNo
    };
  }