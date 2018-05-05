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
      <div className="row">
        <div className='col-md-12'>
          <p> お疲れ様でした </p>
        </div>
      </div>
    );
  }
}