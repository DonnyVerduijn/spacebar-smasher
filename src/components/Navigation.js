import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <button className="back" onClick={this.props.onClickBack}>
          {this.props.labelBack}
        </button>
        <button className="next" onClick={this.props.onClickNext}>
          {this.props.labelNext}
        </button>
      </div>
    );
  }
}

Navigation.propTypes = {
  onClickBack: PropTypes.func,
  onClickNext: PropTypes.func,
  labelBack: PropTypes.string,
  labelNext: PropTypes.String
};

Navigation.defaultProps = {
  onClickBack: () => {
    console.log('back');
  },
  onclickNext: () => {
    console.log('next');
  },
  labelBack: 'back',
  labelNext: 'next'
};

export default Navigation;
