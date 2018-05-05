import React from 'react';
import PropTypes from 'prop-types';

export default class QuizImage extends React.Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { question } = this.props;

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            
        </div>
    );
  }
}