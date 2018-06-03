import React from "react";
import PropTypes from "prop-types";

export default class QuizListShowComponent extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    isLogin: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  renderStartButton(isLogin) {
    if (isLogin) {
      return (
        <div className="col-md-12" style={{ marginTop: "18px" }}>
        <a
          className="btn btn-primary btn-lg btn-block"
          href="#"
          role="button"
        >
          問題を開始する
        </a>
      </div>
      )
    } else {
      return (
        <div className="col-md-12" style={{ marginTop: "18px" }}>
          <a
            className="btn btn-primary btn-lg btn-block"
            href="#"
            role="button"
          >
            ログインせずに問題を開始する
          </a>
          <p style={{ fontSize: "12px", marginTop: '8px'}}>
            ログインしていると結果が後から見られます
          </p>
          <a
            className="btn btn-primary btn-lg btn-block"
            href="#"
            role="button"
          >
            Twitterログイン
          </a>
          <a
            className="btn btn-primary btn-lg btn-block"
            href="#"
            role="button"
          >
            Eveアカウントログイン
          </a>
        </div>
      );
    }
  }
  render() {
    const { title, comment, isLogin } = this.props;

    let hidden = "";
    if (!isLogin) {
      hidden = "hidden";
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <div
            className="alert alert-primary"
            role="alert"
            style={{ textAlign: "center" }}
          >
            {this.props.title}
          </div>
          <p> {this.props.comment} </p>
          {this.renderStartButton(this.props.isLogin)}
        </div>
      </div>
    );
  }
}
