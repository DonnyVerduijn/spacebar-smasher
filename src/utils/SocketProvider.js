import { Component } from 'react';
import PropTypes from 'prop-types';

class SocketProvider extends Component {

  static childContextTypes = {
    socket: PropTypes.object
  };

  getChildContext() {
    return { socket: this.props.socket };
  };

  render() {
    return this.props.children;
  }
}

SocketProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  socket: PropTypes.object
};

export default SocketProvider;
