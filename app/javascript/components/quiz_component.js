import React from 'react';
import PropTypes from 'prop-types';
import QuizImage from './quiz_image';

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
      <div className="row">
        <div className='col-md-1'>
          <p> No1 </p>
        </div>
        <div className='col-md-12'>
          <QuizImage/>
        </div>
        <div className='col-md-12'>
          <p> この船の名前は何？ </p>
        </div>
        <div className='col-md-12'>
          series: {this.props.questionSeriesNo} <br/>
          {question} / Hello
          <button type="button" className="btn btn-primary btn-lg btn-block">Machariel（マカリエル）</button>
          <button type="button" className="btn btn-primary btn-lg btn-block">Machariel（マカリエル）</button>
          <button type="button" className="btn btn-primary btn-lg btn-block">Machariel（マカリエル）</button>
          <button type="button" className="btn btn-primary btn-lg btn-block">Machariel（マカリエル）</button>
        </div>
        <div className='col-md-12'>
          <p> この文字はテストです。この文字はテストです。自由にお使いください。 </p>
        </div>
      </div>
    );
  }
}