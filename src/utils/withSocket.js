import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withSocket = PassedComponent => {
  return class WithSocket extends Component {

    static contextTypes = {
      socket: PropTypes.object
    };

    render() {
      return <PassedComponent socket={this.context.socket} />;
    }
  };
};

export default withSocket;
