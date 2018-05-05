import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducerQuiz } from './reducer_quiz.js';

export default combineReducers({
  router: routerReducer,
  reducerQuiz
});