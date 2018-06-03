import React from "react";
import PropTypes from "prop-types";
import { Radar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

export default class QuizResultComponent extends React.Component {
  static propTypes = {
    historyId: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuizResult(this.props.historyId);
  }

  createRadarData(resultDetails) {
    const labels = resultDetails.map(x => x.tag_name) || [];
    const datas = resultDetails.map(x => x.count) || [];
    return {
      labels: labels,
      datasets: [
        {
          label: "分野毎の知識",
          backgroundColor: "rgba(255,99,132, 0.2)",
          borderColor: "rgba(255,99,132, 1)",
          pointBackgroundColor: "#ff6384",
          pointBorderColor: "rgb(255,99,132)",
          pointHoverBackgroundColor: "",
          pointHoverBorderColor: "rgb(255,99,132)",
          data: datas
        }
      ]
    };
  }

  render() {
    let radarMax = 1;
    if (this.props.totalQuestionCount && this.props.resultDetails) {
      radarMax = Math.ceil(this.props.totalQuestionCount / this.props.resultDetails.length);
    }
    const radarOptions = {
      scale: {
        ticks: {
            beginAtZero: true,
            max: radarMax
        }
      }
    };

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="alert alert-primary"
              role="alert"
              style={{ textAlign: "center" }}
            >
              {this.props.title}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="alert alert-light"
              role="alert"
              style={{ textAlign: "center" }}
            >
              {this.props.resultText}
            </div>
          </div>
          <div className="col">
            <div
              className="alert alert-light"
              role="alert"
              style={{ textAlign: "center" }}
            >
              得点　{this.props.userCorrectCount}/{this.props.totalQuestionCount}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ backgroundColor: "#ffffff" }}>
            <Radar data={this.createRadarData(this.props.resultDetails)} height={200} options={radarOptions}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            Advise <br />
            <p>
              {this.props.comment}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            結果をシェアしよう!!
            <button type="button" className="btn btn-primary btn-lg btn-block">
              <i className="fa fa-twitter fa-1x" />
              結果をツイートする
            </button>
          </div>
        </div>
      </div>
    );
  }
}
