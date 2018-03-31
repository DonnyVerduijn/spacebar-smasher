import React from 'react';
import './App.css';
import ActiveWindowContainer from './../modules/window/containers/ActiveWindowContainer';
import background from './../static/wallTextureDark.png';

const App = () => {
  return (
    <div className="App" style={{ background: `url(${background})` }}>
      <ActiveWindowContainer />
    </div>
  );
};

export default App;
