import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ItemList from './ItemList';
import Canvas from './Canvas';
import SocketClient from './SocketClient';

const socketClient = SocketClient();

const menuItems = [
  {
    label: 'new game',
    onClick: () => {
      return console.log('new game');
    }
  },
  {
    label: 'join game',
    onClick: () => {
      return console.log('join game');
    }
  },
  {
    label: 'highscores',
    onClick: () => {
      return console.log('highscores');
    }
  },
  {
    label: 'settings',
    onClick: () => {
      return console.log('settings');
    }
  },
  {
    label: 'about',
    onClick: () => {
      return console.log('about');
    }
  }
];

// const socket = Socket();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: this.props.isActive };
  }

  render() {
    return (
      <div className="App">
        <Canvas isActive={this.state.isActive} />
        <div className="Menu">
          <h2 className="Title">Spacebar smasher</h2>
          <ItemList items={menuItems} />
        </div>
      </div>
    );
  }
}

App.propTypes = { isActive: PropTypes.bool };
App.defaultProps = { isActive: false };

// implements the player object
// const Player = data => {
//   const { id, name } = data;
//   const width = 0;
//   const height = 0;
//   const color = 'black';
//   let { score } = data;
//   let position = { x: 0, y: 0 };
//   let velocity = { x: 0, y: 0 };

//   const move = () => {
//     position.x += velocity.x;
//     position.y += velocity.y;
//   };

//   const getId = () => {
//     return id;
//   };
//   const getColor = () => {
//     return color;
//   };
//   const getWidth = () => {
//     return width;
//   };
//   const getHeight = () => {
//     return height;
//   };
//   const getScore = () => {
//     return score;
//   };
//   const setScore = value => {
//     score = value;
//   };
//   const getName = () => {
//     return name;
//   };
//   const getPosition = () => {
//     return position;
//   };
//   const setPosition = value => {
//     position = value;
//   };
//   const getVelocity = () => {
//     return velocity;
//   };
//   const setVelocity = value => {
//     velocity = value;
//   };

//   return {
//     move,
//     getId,
//     getColor,
//     getWidth,
//     getHeight,
//     getScore,
//     setScore,
//     getName,
//     getPosition,
//     setPosition,
//     getVelocity,
//     setVelocity
//   };
// };

// player instance container
// const PlayerCollection = () => {
//   const players = {};

//   const removeById = id => {
//     Reflect.deleteProperty(players, id);
//   };
//   const add = player => {
//     players[player.getId()] = player;
//   };
//   const getAll = () => {
//     return Object.keys(players).map(key => {
//       return players[key];
//     });
//   };
//   const getById = id => {
//     return players[id];
//   };

//   return {
//     removeById,
//     add,
//     getAll,
//     getById
//   };
// };

// const playerCollection = PlayerCollection();

window.onkeydown = e => {
  if (!e.repeat) {
    // const now = Date.now();
    socketClient.send(
      JSON.stringify({
        type: 'CREATE_PLAYER',
        payload: { name: 'pietje' }
        // timeDifference: now - lastSpaceBarHit
      })
    );
    // lastSpaceBarHit = now;
  }
};

//   'PLAYER_CREATED'
//   'GAME_CREATED'
//   'GAME_STARTED'
//   'GAME_UPDATED'
//   'GAME_LEAVED'
//   'GAME_JOINED'
//   'GAME_PAUSED'
//   'GAME_RESUMED'
//   'GAME_QUIT'

socketClient.on('PLAYER_CREATED', data => {
  console.log('PLAYER_CREATED', data);
  // playerCollection.add(
  //   Player({
  //     id: data.id,
  //     name: data.name
  //   })
  // );
  // console.log(
  //   playerCollection.getAll().map(player => {
  //     return player.getId();
  //   })
  // );
});

socketClient.on('CONNECTION_ESTABLISHED', data => {
  console.log('CONNECTION_ESTABLISHED', data);
});

socketClient.on('CONNECTION_ERROR', () => {
  console.log('CONNECTION_ERROR');
});

socketClient.on('CONNECTION_CLOSED', () => {
  console.log('CONNECTION_CLOSED');
  try {
    socketClient.connect();
  } catch (error) {
    console.log('cannot connect');
  }
});

socketClient.on('PARSE_ERROR', error => {
  console.log(error.message);
});

export default App;
