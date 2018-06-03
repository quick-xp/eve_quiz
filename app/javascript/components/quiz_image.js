import React from "react";
import PropTypes from "prop-types";

export default class QuizImage extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    const { question } = this.props;

    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://image.eveonline.com/Render/17738_256.png"
              alt="First slide"
            />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
