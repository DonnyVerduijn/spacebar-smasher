const WebSocket = require('ws');
const uuid = require('uuid4');

// module.exports = () => {
// initialize a simple http server
//   const server = http.createServer(app);
// initialize the WebSocket server instance
const socketServer = new WebSocket.Server({
  port: 3001,
  clientTracking: true
});

socketServer.broadcast = data => {
  socketServer.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

const Game = data => {
  const id = uuid();
  let players = [];
  let isActive = false;
  let isPaused = false;
  const { name, createdBy, createdAt } = data;
  players.push(createdBy);
  return {
    getId: () => id,
    getCreatedAt: () => createdAt,
    removePlayerById: playerId => {
      players = players.filter(player => player.id !== playerId);
    },
    getPlayerIds: () => players.slice(),
    getName: () => name,
    getIsActive: () => isActive,
    setIsActive: value => {
      isActive = value;
    },
    getIsPaused: () => isPaused,
    setIsPaused: value => {
      isPaused = value;
    }
  };
};

const GameCollection = () => {
  const games = {};
  return {
    add: game => {
      games[game.getId()] = game;
    },
    removeById: gameId => {
      games[gameId] = undefined;
    },
    getAll: () => games,
    getById: id => games[id]
  };
};

const Player = data => {
  const id = uuid();
  const { name } = data;
  let score = 0;
  return {
    getId: () => id,
    getName: () => name,
    setScore: value => {
      score += value;
    },
    getScore: () => score
  };
};

const PlayerCollection = () => {
  const players = {};
  return {
    add: player => {
      players[player.id] = player;
    },
    removeById: id => {
      players[id] = undefined;
    },
    getAll: () => players,
    getById: id => players[id]
  };
};

const gameCollection = GameCollection();
const playerCollection = PlayerCollection();

socketServer.on('connection', socket => {
  socket.on('message', message => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'CREATE_PLAYER': {
        const player = Player({ name: data.name });
        playerCollection.add(player);
        socket.send(
          JSON.stringify({
            type: 'PLAYER_CREATED',
            id: player.getId(),
            name: player.getName()
          })
        );
        break;
      }
      case 'CREATE_GAME': {
        const game = Game({
          createdBy: data.playerId,
          createdAt: Date.now(),
          name: data.roomName
        });
        gameCollection.add(game);
        socket.send(
          JSON.stringify({
            type: 'GAME_CREATED',
            gameId: game.getId()
          })
        );
        break;
      }
      case 'JOIN_GAME': {
        const game = gameCollection.getById(data.gameId);
        game.addPlayer(data.playerId);
        socket.send(
          JSON.stringify({
            type: 'GAME_JOINED',
            gameId: game.getId()
          })
        );
        break;
      }
      case 'START_GAME': {
        const game = gameCollection.getById(data.gameId);
        game.setIsActive(true);
        socket.send(
          JSON.stringify({
            type: 'GAME_STARTED',
            gameId: game.getId()
          })
        );
        break;
      }
      case 'PAUSE_GAME': {
        const game = gameCollection.getById(data.gameId);
        game.setIsPaused(true);
        socket.send(JSON.stringify({ type: 'GAME_PAUSED' }));
        break;
      }
      case 'RESUME_GAME': {
        const game = gameCollection.getById(data.gameId);
        game.setIsPaused(false);
        socket.send(JSON.stringify({ type: 'GAME_RESUMED' }));
        break;
      }
      case 'QUIT_GAME': {
        const game = gameCollection.getById(data.gameId);
        game.setIsActive(false);
        // game.getPlayerIds().forEach(playerId => {
        //   playerCollection.getById(playerId).getScore();
        // });
        socket.send(JSON.stringify({ type: 'GAME_QUIT' }));
        break;
      }
      case 'EXIT_GAME':
      case 'PLAYER_ACTION':
      default:
        break;
    }
  });

  socket.on('error', error => {
    if (error) {
      socket.terminate();
    }
  });

  socket.on('close', () => {
    console.log('disconnected');
  });
  console.log('connected');
});
// };
