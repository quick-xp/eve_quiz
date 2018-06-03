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
    this.props.clearHistoryId();
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
      );
    } else {
      return (
        <div className="col-md-12" style={{ marginTop: "18px" }}>
          <a
            className="btn btn-primary btn-lg btn-block"
            role="button"
            onClick={_ => this.props.createQuiz(1)}
          >
            ログインせずに問題を開始する
          </a>
          <p style={{ fontSize: "12px", marginTop: "8px" }}>
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

  renderMain() {
    return (
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
    );
  }

  renderLoading() {
    return (
      <div className="col-md-12">
        <p>問題を生成中です</p>
      </div>
    );
  }

  render() {
    const { loading, historyId } = this.props;

    if (historyId) {
      location.href = `/quiz/${this.props.historyId}`;
    }

    let mainRender = null;
    if (loading) {
      mainRender = this.renderLoading();
    } else {
      mainRender = this.renderMain(); 
    }
    
    return <div className="row">{mainRender}</div>;
  }
}
