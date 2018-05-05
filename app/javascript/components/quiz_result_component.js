import React from 'react';
import PropTypes from 'prop-types';

export default class QuizResultComponent extends React.Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { } = this.props;

    return (
      <span>
        <div className="row">
          <div className='col-md-12'>
            <div className="alert alert-primary" role="alert" style={{textAlign: 'center'}}>
              Eve Online 総合知識検定 結果
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col'>
            <div className="alert alert-light" role="alert" style={{textAlign: 'center'}}>
              総合 A
            </div>
          </div>   
          <div className='col'>
            <div className="alert alert-light" role="alert" style={{textAlign: 'center'}}>
              得点　78/100
            </div>
          </div>          
        </div>
        <div className="row">
          <div className='col-md-12'>
          Advise <br />
            <p>すばらしい知識力です。大抵のことは熟知しているためゲーム内で困ることは少ないでしょう。</p>    
          </div>   
        </div>
      </span>
    );
  }
}