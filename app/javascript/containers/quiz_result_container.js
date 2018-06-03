import { connect } from 'react-redux'
import QuizResultComponent from '../components/quiz_result_component';
import { fetchQuizResult } from '../actions/quiz';

const mapStateToProps = (state) => {
  return {
    totalQuestionCount: state.quiz.totalQuestionCount,
    userCorrectCount: state.quiz.userCorrectCount,
    comment: state.quiz.comment,
    resultText: state.quiz.resultText,
    title: state.quiz.title,
    resultDetails: state.quiz.resultDetails,
    loading: state.quiz.loading
  };
}

const mapDispatchToProps = dispatch => ({
  fetchQuizResult(historyId) {
    dispatch(fetchQuizResult(historyId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizResultComponent);