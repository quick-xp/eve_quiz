import { fetchQuestion } from '../actions/quiz';

const INITIAL_STATE = { 
    question: "No1"
};

export default function reducerQuiz(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {
        case FETCH_QUIZ_QUESTION:
            return {...state, question: 'No2'};
    }
}