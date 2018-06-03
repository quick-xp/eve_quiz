import { connect } from "react-redux";
import QuizHomeComponent from "../components/quiz_home_component";
import { fetchQuiz, updateChoiceAnswer } from "../actions/quiz";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QuizHomeComponent);
