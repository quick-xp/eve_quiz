import { connect } from 'react-redux'
import QuizComponent from '../components/quiz_component';
import { fetchQuiz, updateChoiceAnswer } from '../actions/quiz';

const mapStateToProps = (state) => {
  return { 
    quizLists: state.quiz.quizLists,
    quizNo: state.quiz.quizNo,
    quizTotalCount: state.quiz.quizTotalCount,
    isCompleted: state.quiz.isCompleted,
    loading: state.quiz.loading
  };
}

const mapDispatchToProps = dispatch => ({
    fetchQuiz(historyId) {
      dispatch(fetchQuiz(historyId));
    },
    updateChoiceAnswer(questionHistoryId, historyId, choiceId) {
      dispatch(updateChoiceAnswer(questionHistoryId, historyId, choiceId));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);