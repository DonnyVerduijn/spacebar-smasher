import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Canvas from './../components/Canvas';
import SocketClient from './../utils/SocketClient';
import Menu from './Menu';
const socketClient = SocketClient();

const MainMenu = [
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

const NewGameMenu = [];

const highscoresMenu = [];

const settingsMenu = [];

const aboutMenu = [];

const activeMenuItems = currentMenu => {
  switch (currentMenu) {
    case 'main':
      return MainMenu;
    case 'newGame':
      return NewGameMenu;
    case 'highscores':
      return highscoresMenu;
    case 'settings':
      return settingsMenu;
    case 'about':
      return aboutMenu;
    default:
      return MainMenu;
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive,
      currentMenu: 'main'
    };
  }

  render() {
    return (
      <div className="App">
        <Canvas
          ref={ref => {
            this.canvas = ref;
          }}
          isActive={this.state.isActive}
        />
        <Menu menuItems={activeMenuItems()} />
      </div>
    );
  }
}

App.propTypes = { isActive: PropTypes.bool };
App.defaultProps = { isActive: false };

// Player prototype
// const Player = {
//   getId() {
//     return this.id;
//   },
//   getColor() {
//     return this.color;
//   },
//   getWidth() {
//     return this.width;
//   },
//   getHeight() {
//     return this.height;
//   },
//   getScore() {
//     return this.score;
//   },
//   setScore(value) {
//     this.score = value;
//   },
//   getName() {
//     return this.name;
//   },
//   getPosition() {
//     return this.position;
//   },
//   setPosition(value) {
//     this.position = value;
//   }
// };

// const PlayerFactory = options => {
//   return Object.create(Player, {
//     id: { value: options.id },
//     name: { value: options.name || '' },
//     width: {
//       value: options.width || 100,
//       writable: true
//     },
//     height: {
//       value: options.width || 100,
//       writable: true
//     },
//     color: {
//       value: options.color || 'black',
//       writable: true
//     },
//     score: {
//       value: 0,
//       writable: true
//     },
//     position: {
//       value: options.position || { x: 0, y: 0 },
//       writable: true
//     }
//   });
// };

// const player = PlayerFactory({});

// window.onkeydown = e => {
//   if (!e.repeat) {
//     // const now = Date.now();
//     socketClient.send(
//       JSON.stringify({
//         type: 'CREATE_PLAYER',
//         payload: { name: 'pietje' }
//         // timeDifference: now - lastSpaceBarHit
//       })
//     );
//     // lastSpaceBarHit = now;
//   }
// };

socketClient.on('USER_CREATED', () => {
  //
});

socketClient.on('GAME_CREATED', () => {
  //
});

socketClient.on('GAME_STARTED', () => {
  //
});

socketClient.on('GAME_UPDATED', () => {
  //
});

socketClient.on('GAME_LEAVED', () => {
  //
});

socketClient.on('GAME_JOINED', () => {
  //
});

socketClient.on('GAME_PAUSED', () => {
  //
});

socketClient.on('GAME_RESUMED', () => {
  //
});

socketClient.on('GAME_QUIT', () => {
  //
});

socketClient.on('USER_CREATED', data => {
  console.log('USER_CREATED', data);
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

socketClient.on('CONNECTION_ESTABLISHED', () => {
  //
});

socketClient.on('CONNECTION_ERROR', () => {
  //
});

socketClient.on('CONNECTION_CLOSED', () => {
  //
});

socketClient.on('PARSE_ERROR', () => {
  //
});

export default App;
