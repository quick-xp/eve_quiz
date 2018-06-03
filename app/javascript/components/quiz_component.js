import React from "react";
import PropTypes from "prop-types";
import QuizImage from "./quiz_image";

export default class QuizComponent extends React.Component {
  static propTypes = {
    questionSeriesNo: PropTypes.number.isRequired,
    historyId: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuiz(this.props.historyId);
  }

  renderQuestion(quiz) {
    if (quiz) {
      return <p> 問題: {quiz.question} </p>;
    }
  }

  renderHint(quiz) {
    if (quiz && quiz.hint) {
      return <p> ヒント: {quiz.hint} </p>;
    }
  }

  renderChoice(quiz) {
    if (quiz && quiz.choice) {
      return quiz.choice.map(c => {
        return (
          <button
            key={`choice-button-${c.id}`}
            type="button"
            className="btn btn-primary btn-lg btn-block"
            onClick={_ =>
              this.props.updateChoiceAnswer(
                quiz.id,
                this.props.historyId,
                c.id
              )
            }
          >
            {c.choice}
          </button>
        );
      });
    }
  }

  render() {
    const { quizLists, quizNo, quizTotalCount } = this.props;
    const { isCompleted } = this.props;
    let hidden = '';
    if (isCompleted) {
      location.href = `/quiz_results/${this.props.historyId}`;
    }
    if (this.props.loading) {
      hidden = 'hidden';
    }
    const quiz = quizLists[quizNo - 1];

    return (
      <div className={`"row" ${hidden}`}>
        <div className="col-md-12">
          <p>
            No. {quizNo} / {quizTotalCount}
          </p>
        </div>
        <div className="col-md-12">
          <div className="col-md-12">
            <QuizImage />
          </div>
        </div>
        <div className="col-md-12">{this.renderQuestion(quiz)}</div>
        <div className="col-md-12">{this.renderChoice(quiz)}</div>
        <div className="col-md-12" style={{marginTop: '4px'}}>{this.renderHint(quiz)}</div>
      </div>
    );
  }
}
