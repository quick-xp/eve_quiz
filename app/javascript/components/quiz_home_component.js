import React from "react";
import PropTypes from "prop-types";

export default class QuizHomeComponent extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const style = { backgroundColor: "#2D2619"};
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron" style={style}>
            <h1 className="display-4">Eve Quiz</h1>
            <p className="lead">
              覚えることがたくさんのEve Online.<br />
              案外忘れている知識も多いかも...<br /><br />
              さあ あなたの知識力をテストしよう！！
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              知識力チェックへ
            </a>
          </div>
        </div>
      </div>
    );
  }
}
