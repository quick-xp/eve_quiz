import React from "react";
import PropTypes from "prop-types";

export default class QuizHomeComponent extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const style = { backgroundColor: "#2D2619" };
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron" style={style}>
            <h1 className="display-4">Eve Quiz</h1>
            <p className="lead">
              覚えることがたくさんのEve Online.<br />
              案外忘れている知識も多いかも...<br />
              <br />
              さあ あなたの知識力をテストしよう！！
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              知識力チェックへ
            </a>
          </div>
        </div>

        <div className="col-md-12">
          <p> Level 別問題 </p>
          <div className="alert alert-primary">
            入門編
          </div>
          <a className="btn btn-primary btn-lg" style={{marginRight: '6px'}} href="#" role="button">
            総合チェック
          </a>
          <a className="btn btn-primary btn-lg" style={{marginRight: '6px'}} href="#" role="button">
            PVP
          </a>
          <a className="btn btn-primary btn-lg" style={{marginRight: '6px'}} href="#" role="button">
            もっと見る
          </a>
          <div className="alert alert-success" style={{marginTop: '12px'}}>
            初級編
          </div>
          <a className="btn btn-primary btn-lg" style={{marginRight: '6px'}} href="#" role="button">
            総合チェック
          </a>
          <a className="btn btn-primary btn-lg" style={{marginRight: '6px'}} href="#" role="button">
            PVP
          </a>
          <a className="btn btn-primary btn-lg" style={{marginRight: '6px'}} href="#" role="button">
            もっと見る
          </a>
        </div>
        <br/>
        <div className="col-md-12" style={{marginTop: '18px'}}>
          <p> ログイン限定メニュー </p>
          <a className="btn btn-primary btn-lg btn-block" href="#" role="button">
            問題を投稿する
          </a>
        </div>
      </div>
    );
  }
}
