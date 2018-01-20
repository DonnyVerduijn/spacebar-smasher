import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Canvas from './../components/Canvas';
import ActiveWindowContainer from './../modules/window/containers/ActiveWindowContainer';
import background from './../static/wallTextureDark.png';

const App = () => {
  return (
    <div className="App" style={{ background: `url(${background})` }}>
      <Canvas />
      <ActiveWindowContainer />
    </div>
  );
};

App.propTypes = { isActive: PropTypes.bool };
App.defaultProps = { isActive: false };

export default App;
