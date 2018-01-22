const SocketServer = require('./SocketServer');

const User = require('./User');
const UserCollection = require('./UserCollection');
const Game = require('./Game');
const GameCollection = require('./GameCollection');

// create instances
const socketServer = SocketServer();
const gameCollection = GameCollection();
const users = UserCollection();

socketServer.on('CONNECTION_ESTABLISHED', client => {
  // send clientId back to the client from the request
  socketServer.sendById(client.id, {
    type: 'CONNECTION_ESTABLISHED',
    payload: { id: client.id }
  });
});

socketServer.on('CONNECTION_CLOSED', () => {
  // quit game
});

socketServer.on('CONNECTION_ERROR', () => {
  // quit game
});

socketServer.on('VALIDATE_USER', (client, { name }) => {
  const result = users.nameExists(name) && name.length > 0;
  client.socket.send(JSON.stringify({
    type: 'USER_VALIDATED',
    payload: {
      name,
      nameAvailable: result
    }
  }));
});

socketServer.on('CREATE_USER', (client, { name }) => {
  // when a user already exists
  if (users.clientIdExists(client.id)) {
    users.removeByClientId(client.id);
  }
  // create a new user
  const user = User({ name, clientId: client.id });
  users.add(user);

  console.log('USER_CREATED', user.id);
  // send back the user object
  client.socket.send(
    JSON.stringify({
      type: 'USER_CREATED',
      payload: {
        id: user.id,
        name: user.name
      }
    })
  );
});

socketServer.on('VALIDATE_GAME', (client, { name }) => {
  const result = gameCollection.nameExists(name) && name.length > 0;
  client.socket.send(JSON.stringify({
    type: 'GAME_VALIDATED',
    payload: {
      nameAvailable: result
    }
  }));
});

socketServer.on('CREATE_GAME', (client, data) => {
  console.log('owned', gameCollection.getAllByOwnerId(client.id));
  console.log('data', data);
  const user = users.getByClientId(client.id);
  const game = Game({
    ownerId: user.id,
    name: data.name
  });
  gameCollection.add(game);
  client.socket.send(
    JSON.stringify({
      type: 'GAME_CREATED',
      payload: {
        id: game.id,
        name: game.name,
        ownerId: user.id
      }
    })
  );
  console.log(gameCollection.getAllByOwnerId());

});
socketServer.on('JOIN_GAME', (client, data) => {
  const game = gameCollection.getById(data.gameId);
  game.addUser(data.userId);
  client.socket.send(
    JSON.stringify({
      type: 'GAME_JOINED',
      payload: { gameId: game.id }
    })
  );
});
socketServer.on('START_GAME', (client, data) => {
  const game = gameCollection.getById(data.gameId);
  game.setIsActive(true);
  client.socket.send(
    JSON.stringify({
      type: 'GAME_STARTED',
      payload: { gameId: game.id }
    })
  );
});
socketServer.on('PAUSE_GAME', (client, data) => {
  const game = gameCollection.getById(data.gameId);
  game.setIsPaused(true);
  client.socket.send(
    JSON.stringify({
      type: 'GAME_PAUSED',
      payload: { gameId: game.id }
    })
  );
});
socketServer.on('RESUME_GAME', (client, data) => {
  const game = gameCollection.getById(data.gameId);
  game.setIsPaused(false);
  client.socket.send(JSON.stringify({ type: 'GAME_RESUMED' }));
});
socketServer.on('QUIT_GAME', (client, data) => {
  const game = gameCollection.getById(data.gameId);
  game.setIsActive(false);
  // game.getUserIds().forEach(userId => {
  //   userCollection.getById(userId).getScore();
  // });
  client.socket.send(JSON.stringify({ type: 'GAME_QUIT' }));
});
socketServer.on('EXIT_GAME', data => {
  console.log(data);
});
socketServer.on('USER_ACTION', data => {
  console.log(data);
});
