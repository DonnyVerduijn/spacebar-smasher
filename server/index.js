const SocketServer = require('./SocketServer');

const User = require('./User');
const UserCollection = require('./UserCollection');
const Game = require('./Game');
const GameCollection = require('./GameCollection');

// create instances
const socketServer = SocketServer();
const gameCollection = GameCollection();
const userCollection = UserCollection();

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
  const result = userCollection.userByNameExists(name);
  client.socket.send(JSON.stringify({
    type: 'USER_VALIDATED',
    payload: {
      userNameAvailable: result
    }
  }));
});

socketServer.on('CREATE_USER', (client, { name, clientId }) => {
  if (!userCollection.userByClientIdExists(clientId)) {
    const user = User({ name, clientId });
    userCollection.add(user);

    console.log('USER_CREATED', user.getId());
    client.socket.send(
      JSON.stringify({
        type: 'USER_CREATED',
        payload: {
          id: user.getId(),
          name: user.getName()
        }
      })
    );
  }
});

socketServer.on('CREATE_GAME', (client, data) => {
  console.log(gameCollection.getAllByOwnerId());
  console.log(data);
  const game = Game({
    ownerId: data.userId,
    createdAt: Date.now(),
    name: data.name
  });
  gameCollection.add(game);
  client.socket.send(
    JSON.stringify({
      type: 'GAME_CREATED',
      payload: {
        id: game.getId(),
        name: game.getName(),
        ownerId: game.getOwnerId()
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
      payload: { gameId: game.getId() }
    })
  );
});
socketServer.on('START_GAME', (client, data) => {
  const game = gameCollection.getById(data.gameId);
  game.setIsActive(true);
  client.socket.send(
    JSON.stringify({
      type: 'GAME_STARTED',
      payload: { gameId: game.getId() }
    })
  );
});
socketServer.on('PAUSE_GAME', (client, data) => {
  const game = gameCollection.getById(data.gameId);
  game.setIsPaused(true);
  client.socket.send(
    JSON.stringify({
      type: 'GAME_PAUSED',
      payload: { gameId: game.getId() }
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
