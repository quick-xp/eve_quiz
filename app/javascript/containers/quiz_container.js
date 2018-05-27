import { connect } from 'react-redux'
import QuizComponent from '../components/quiz_component';
import { fetchQuestion, setQuizLists } from '../actions/quiz';

const mapStateToProps = (state) => {
  return { 
    question: state.quiz.question
  };
}

const mapDispatchToProps = dispatch => ({
    fetchQuestion(questionSeriesNo) {
      dispatch(fetchQuestion(questionSeriesNo));
    },
    fetchQuiz(historyId) {
      dispatch(fetchQuiz(historyId));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);