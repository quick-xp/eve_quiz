import React from 'react';
import PropTypes from 'prop-types';
import {Radar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

const data = {
  labels  : ['PvP', 'PvE', '生産', '交易', '探検', 'その他'],
  datasets: [
      {
          label                    : '分野毎の知識',
          backgroundColor          : 'rgba(179,181,198,0.2)',
          borderColor              : 'rgba(179,181,198,1)',
          pointBackgroundColor     : 'rgba(179,181,198,1)',
          pointBorderColor         : '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor    : 'rgba(179,181,198,1)',
          data                     : [10,12,8,15,2,8]
      }
  ]
};



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
      <div>
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
          <div className='col' style={{backgroundColor: "#ffffff"}}>
            <Radar data={data} height={200}/>
          </div>
        </div>
        <div className="row">
          <div className='col-md-12'>
          Advise <br />
            <p>すばらしい知識力です。大抵のことは熟知しているためゲーム内で困ることは少ないでしょう。</p>    
          </div>   
        </div>
        <div className="row">
          <div className='col-md-12'>
          結果をシェアしよう!!
          <button type="button" className="btn btn-primary btn-lg btn-block">
            <i className="fa fa-twitter fa-1x"></i>
            結果をツイートする
          </button>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    );
  }
}