import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: this.props.isActive };
  }

  componentDidMount() {
    this.canvas.width = this.props.width || window.innerWidth;
    this.canvas.height = this.props.height || window.innerHeight;
    this.context = this.canvas.getContext('2d');

    const that = this;
    function step() {
      // console.time();
      // console.log(this);
      if (that.state.isActive) {
        // console.time('update');
        that.update();
        // console.timeEnd('update');
      }
      window.requestAnimationFrame(step);
    }

    // ignite
    window.requestAnimationFrame(step);
  }

  componentWillUnmount() {
    this.setState({ isActive: false });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isActive: nextProps.isActive });
    this.canvas.width = nextProps.width;
    this.canvas.height = nextProps.height;
  }

  shouldComponentUpdate() {
    return false;
  }

  update() {
    this.clear();
    // console.count();
    this.props.render(this.context);
    // this.elements.forEach(user => {
    //   this.draw(user);
    // });
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

Canvas.propTypes = {
  isActive: PropTypes.bool,
  render: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Canvas;
