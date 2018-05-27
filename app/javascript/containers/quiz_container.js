import { connect } from 'react-redux'
import QuizComponent from '../components/quiz_component';
import { fetchQuestion, fetchQuiz } from '../actions/quiz';

const mapStateToProps = (state) => {
  return { 
    question: state.quiz.question
  };
}

const mapDispatchToProps = dispatch => ({
    fetchQuiz(historyId) {
      dispatch(fetchQuiz(historyId));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);