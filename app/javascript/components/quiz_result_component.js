import React from 'react';
import PropTypes from 'prop-types';
import {Radar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

const data = {
  labels  : ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
      {
          label                    : 'My First dataset',
          backgroundColor          : 'rgba(179,181,198,0.2)',
          borderColor              : 'rgba(179,181,198,1)',
          pointBackgroundColor     : 'rgba(179,181,198,1)',
          pointBorderColor         : '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor    : 'rgba(179,181,198,1)',
          data                     : [65, 59, 90, 81, 56, 55, 40]
      },
      {
          label                    : 'My Second dataset',
          backgroundColor          : 'rgba(255,99,132,0.2)',
          borderColor              : 'rgba(255,99,132,1)',
          pointBackgroundColor     : 'rgba(255,99,132,1)',
          pointBorderColor         : '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor    : 'rgba(255,99,132,1)',
          data                     : [28, 48, 40, 19, 96, 27, 100]
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

    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        }
      ]
    };

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
        <Radar data={data} />
        <Line data={chartData} width={200} height={200}/>
      </span>
    );
  }
}