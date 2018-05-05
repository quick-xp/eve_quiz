import { connect } from 'react-redux'
import QuizComponent from '../components/quiz_component';

const mapStateToProps = (state) => {
  return { 
    question: state.question
  };
}

const mapDispatchToProps = dispatch => ({
    fetchQuestion(questionSeriesNo) {
      dispatch(fetchQuestion(questionSeriesNo));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);