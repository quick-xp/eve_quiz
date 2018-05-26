import React from 'react';
import PropTypes from 'prop-types';
import QuizImage from './quiz_image';

export default class QuizComponent extends React.Component {
  static propTypes = {
    questionSeriesNo: PropTypes.number.isRequired,
    historyId: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionSeriesNo);
    this.props.setQuizLists(this.props.historyId)
  }

  render() {
    const { question } = this.props;

    return (
      <div className="row">
        <div className='col-md-12'>
          <p> No1 </p>
        </div>
        <div className='col-md-12'>
          <div className='col-md-4'><QuizImage/></div>
        </div>
        <div className='col-md-12'>
          <p> この船の名前は何？ </p>
        </div>
        <div className='col-md-12'>
          No.1
          <button type="button" className="btn btn-primary btn-lg btn-block">Machariel（マカリエル）</button>
          <button type="button" className="btn btn-primary btn-lg btn-block">Machariel（マカリエル）</button>
          <button type="button" className="btn btn-primary btn-lg btn-block">Machariel（マカリエル）</button>
        </div>
        <div className='col-md-12'>
          <p> ヒント: ヒントがある場合はここに表示されます。 </p>
        </div>
      </div>
    );
  }
}