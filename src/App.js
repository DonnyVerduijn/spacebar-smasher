import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

import './index.css';

const MenuItem = item => {
  const menuItem = document.createElement('li');
  menuItem.classList.add('MenuItem');

  const linkElement = document.createElement('a');
  linkElement.classList.add('Link');
  linkElement.innerText = item.label;
  linkElement.href = '#';
  linkElement.onclick = e => {
    e.preventDefault();
    item.onClick(e);
  };
  menuItem.appendChild(linkElement);
  return menuItem;
};

const Menu = options => {
  const menu = document.createElement('div');
  menu.classList.add('Menu');
  const title = document.createElement('h2');
  title.classList.add('Title');
  title.innerText = options.title;

  const menuItemList = document.createElement('ul');
  menuItemList.classList.add('MenuItemList');
  options.menuItems.forEach(menuItem => {
    menuItemList.appendChild(menuItem);
  });
  menu.appendChild(title);
  menu.appendChild(menuItemList);

  const append = () => {
    document.body.appendChild(menu);
  };

  const remove = () => {
    menu.remove();
  };
  return {
    remove,
    append
  };
};

const mainMenu = Menu({
  title: 'spacebar destroyer',
  menuItems: [
    MenuItem({
      label: 'new game',
      onClick: () => {
        mainMenu.remove();
        console.log('new game');
      }
    }),
    MenuItem({
      label: 'join game',
      onClick: () => {
        mainMenu.remove();
        console.log('join game');
      }
    }),
    MenuItem({
      label: 'settings',
      onClick: () => {
        mainMenu.remove();
        console.log('settings');
      }
    }),
    MenuItem({
      label: 'highscores',
      onClick: () => {
        mainMenu.remove();
        console.log('highscores');
      }
    }),
    MenuItem({
      label: 'about',
      onClick: () => {
        mainMenu.remove();
        console.log('about');
      }
    })
  ]
});

// implements the canvas object
const Canvas = () => {
  const canvas = document.createElement('canvas');
  canvas.classList.add('Canvas');
  const context = canvas.getContext('2d');
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  mainMenu.append();

  const clear = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };
  const draw = object => {
    context.fillStyle(object.getColor());
    context.fillRect(
      object.getPosition().x,
      object.getPosition().y,
      object.getWidth(),
      object.getHeight()
    );
  };

  return {
    width: canvas.width,
    height: canvas.height,
    clear,
    draw
  };
};

// implements the player object
const Player = data => {
  const { id, name } = data;
  const width = 0;
  const height = 0;
  const color = 'black';
  let { score } = data;
  let position = { x: 0, y: 0 };
  let velocity = { x: 0, y: 0 };

  const move = () => {
    position.x += velocity.x;
    position.y += velocity.y;
  };

  const getId = () => id;
  const getColor = () => color;
  const getWidth = () => width;
  const getHeight = () => height;
  const getScore = () => score;
  const setScore = value => {
    score = value;
  };
  const getName = () => name;
  const getPosition = () => position;
  const setPosition = value => {
    position = value;
  };
  const getVelocity = () => velocity;
  const setVelocity = value => {
    velocity = value;
  };

  return {
    move,
    getId,
    getColor,
    getWidth,
    getHeight,
    getScore,
    setScore,
    getName,
    getPosition,
    setPosition,
    getVelocity,
    setVelocity
  };
};

// player instance container
const PlayerCollection = () => {
  const players = {};

  const removeById = id => {
    players[id] = undefined;
  };
  const add = player => {
    players[player.id] = player;
  };
  const getAll = () => Object.keys(players).map(key => players[key]);
  const getById = id => players[id];

  return {
    removeById,
    add,
    getAll,
    getById
  };
};

function Old() {
  const canvas = Canvas();
  const playerCollection = PlayerCollection();
  const socket = new WebSocket('ws://localhost:3000');

  // let localPlayerId;
  // let currentGameId;

  canvas.clear();
  playerCollection.getAll().forEach(player => {
    player.update();
    canvas.draw(player);
  });
  socket.onmessage = message => {
    const data = JSON.parse(message.data);
    switch (data.type) {
      case 'PLAYER_CREATED': {
        // localPlayerId = data.id;
        playerCollection.add(
          Player({
            id: data.id,
            name: data.name
          })
        );
        break;
      }
      case 'GAME_CREATED': {
        break;
      }
      case 'GAME_STARTED':
        // start the game do some counter thing
        break;
      case 'GAME_UPDATED':
        // called when any player has updated its values
        // renew the player data (from enemies)
        break;
      case 'GAME_LEAVED':
        // called when the server has received the leave request
        // show stats (end of game window)
        break;
      case 'GAME_JOINED':
        // called when the user has joined a game
        // show the list of joined users in the game
        break;
      case 'GAME_PAUSED':
        // called when the game has been paused by any player
        // show the paused menu
        break;
      case 'GAME_RESUMED':
        // called when any player resumes the game
        // resume the game (remove the paused menu)
        break;
      case 'GAME_QUIT':
        // called when the player quits the game
        // stop game and show end of game screen
        break;
      default:
        break;
    }
  };

  socket.onclose = () => {
    console.log('connection closed');
  };

  socket.onerror = error => {
    console.log(`WebSocket Error ${error}`);
  };
  // let lastSpaceBarHit = Date.now();
  window.onkeydown = e => {
    if (!e.repeat) {
      // const now = Date.now();
      socket.send(
        JSON.stringify({
          type: 'CREATE_PLAYER',
          name: 'pietje'
          // timeDifference: now - lastSpaceBarHit
        })
      );
      // lastSpaceBarHit = now;
    }
  };
}

window.onload = () => {
  Old();
};

export default App;
