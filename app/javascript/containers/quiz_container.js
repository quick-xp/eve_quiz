import { connect } from 'react-redux'
import QuizComponent from '../components/quiz_component';
import { fetchQuestion } from '../actions/quiz';

const mapStateToProps = (state) => {
  return { 
    question: state.quiz.question
  };
}

const mapDispatchToProps = dispatch => ({
    fetchQuestion(questionSeriesNo) {
      dispatch(fetchQuestion(questionSeriesNo));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);