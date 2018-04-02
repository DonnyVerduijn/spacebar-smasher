import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './../../../components/Canvas';

const multiplyBy = multiplier => value => {
  return multiplier * value;
};

const center = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5
};

// 50 presses per second
// const maxScore = 50;
const userSize = {
  x: 50,
  y: 100
};

class GameWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { users: this.props.users, game: this.props.game };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(...nextProps);
  }

  shouldComponentUpdate() {
    return false;
  }

  // THIS IS HOT!!!!!!
  renderCanvasElements(context) {
    const { users } = this.state;
    // users.forEach((user, index) => {
      const size = {
        x: 25,
        // y: user.score / maxScore * userSize.y
        y: 100
      };
      const position = {
        x:
          center.x +
          multiplyBy(size.x * 2)(1) -
          multiplyBy(size.x)(users.length),
        y: center.y - userSize.y
      };
      context.fillStyle = 'white';
      context.fillRect(position.x, position.y, size.x, size.y);
    //   context.fillText(user.name, position.x, position.y + 50);
    // });
  }

  componentDidMount() {
    document.body.onkeydown = e => {
      if (!e.repeat) {
        userSize.y += 1;
      }
    };
  }

  render() {
    return (
      <Canvas
        width={window.innerWidth}
        height={window.innerHeight}
        isActive={this.props.game.isActive}
        render={context => this.renderCanvasElements(context)}
      />
    );
  }
}

GameWindow.propTypes = {
  game: PropTypes.object,
  users: PropTypes.array
};

export default GameWindow;
