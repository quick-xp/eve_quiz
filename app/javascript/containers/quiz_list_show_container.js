import { connect } from "react-redux";
import QuizListShowComponent from "../components/quiz_list_show_component";
import { fetchQuiz, updateChoiceAnswer } from "../actions/quiz";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuizListShowComponent
);
