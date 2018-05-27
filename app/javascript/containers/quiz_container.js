import { connect } from 'react-redux'
import QuizComponent from '../components/quiz_component';
import { fetchQuestion, fetchQuiz } from '../actions/quiz';

const mapStateToProps = (state) => {
  return { 
    quizLists: state.quiz.quizLists,
    quizNo: state.quiz.quizNo,
    quizTotalCount: state.quiz.quizTotalCount
  };
}

const mapDispatchToProps = dispatch => ({
    fetchQuiz(historyId) {
      dispatch(fetchQuiz(historyId));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);