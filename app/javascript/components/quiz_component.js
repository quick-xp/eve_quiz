import React from 'react';
import PropTypes from 'prop-types';

export default class QuizComponent extends React.Component {
  static propTypes = {
    questionSeriesNo: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionSeriesNo);
  }

  render() {
    const { question } = this.props;

    return (
      <div className="row">
        {this.props.question} / Hello
      </div>);
  }
}