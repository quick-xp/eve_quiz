import React from 'react';
import PropTypes from 'prop-types';

export default class QuizComponent extends React.Component {
  static propTypes = {
    questionSeriesNo: PropTypes.number.isRequired
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
      <div className="row m-t-1">
      <div className="col-md-2 bg-info">② 544px以上で6列幅のボックス</div>
        series: {this.props.questionSeriesNo} <br/>
        {question} / Hello
        <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
      </div>);
  }
}