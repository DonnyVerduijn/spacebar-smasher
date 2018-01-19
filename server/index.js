const SocketServer = require('./SocketServer');

const Player = require('./Player');
const PlayerCollection = require('./PlayerCollection');
const Game = require('./Game');
const GameCollection = require('./GameCollection');

// create instances
const socketServer = SocketServer();
const gameCollection = GameCollection();
const playerCollection = PlayerCollection();

socketServer.on('CONNECTION_ESTABLISHED', client => {
  // send clientId back to the client from the request
  socketServer.sendById(client.id, {
    type: 'CONNECTION_ESTABLISHED',
    payload: { clientId: client.id }
  });
});

socketServer.on('CONNECTION_CLOSED', () => {
  // quit game
});

socketServer.on('CONNECTION_ERROR', () => {
  // quit game
});

socketServer.on('CREATE_USER', (client, { name, clientId }) => {
  if (!playerCollection.playerExistsByClientId(clientId)) {
    const player = Player({ name, clientId });
    playerCollection.add(player);

    console.log('USER_CREATED', player.getId());
    client.socket.send(
      JSON.stringify({
        type: 'USER_CREATED',
        payload: {
          id: player.getId(),
          name: player.getName()
        }
      })
    );
  }
});

socketServer.on('CREATE_GAME', (client, data) => {
  console.log(gameCollection.getAllByOwnerId());
  console.log(data);
  const game = Game({
    ownerId: data.playerId,
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
  game.addPlayer(data.playerId);
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
  // game.getPlayerIds().forEach(playerId => {
  //   playerCollection.getById(playerId).getScore();
  // });
  client.socket.send(JSON.stringify({ type: 'GAME_QUIT' }));
});
socketServer.on('EXIT_GAME', data => {
  console.log(data);
});
socketServer.on('PLAYER_ACTION', data => {
  console.log(data);
});
