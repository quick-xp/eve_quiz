import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ReducerQuiz } from './reducer_quiz';

const rootReducer = combineReducers({
  router: routerReducer,
  quiz: ReducerQuiz
});

export default rootReducer;
