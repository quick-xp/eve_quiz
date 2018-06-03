import { connect } from "react-redux";
import QuizListShowComponent from "../components/quiz_list_show_component";
import { createQuiz, clearHistoryId } from "../actions/quiz";

const mapStateToProps = state => {
  return {
    historyId: state.quiz.historyId,
    loading: state.quiz.loading
  };
};

const mapDispatchToProps = dispatch => ({
  createQuiz(quizListId) {
    dispatch(createQuiz(quizListId));
  },
  clearHistoryId() {
    dispatch(clearHistoryId());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuizListShowComponent
);
