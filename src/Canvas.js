import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context = this.canvas.getContext('2d');

    const that = this;
    function step() {
      if (that.state.isActive) {
        that.update();
      }
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  componentWillUnmount() {
    this.setState({ isActive: false });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isActive: nextProps.isActive });
  }

  shouldComponentUpdate() {
    return false;
  }

  update() {
    console.log('test');
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw(object) {
    this.context.fillStyle(object.getColor());
    this.context.fillRect(
      object.getPosition().x,
      object.getPosition().y,
      object.getWidth(),
      object.getHeight()
    );
  }

  render() {
    return (
      <canvas
        ref={canvas => {
          this.canvas = canvas;
        }}
        className="Canvas"
      />
    );
  }
}

Canvas.propTypes = { isActive: PropTypes.bool };

export default Canvas;
