import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './../../../components/Canvas';

class GameCanvas extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <Canvas draw={(context) => {
            context.fillRect();
        }}/>;
    }
};

GameCanvas.propTypes = { isActive: PropTypes.bool };
