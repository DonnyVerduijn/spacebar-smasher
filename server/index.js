const SocketServer = require('./SocketServer');

const Player = require('./Player');
const PlayerCollection = require('./PlayerCollection');
const Game = require('./Game');
const GameCollection = require('./GameCollection');

// create instances
const socketServer = SocketServer();
const gameCollection = GameCollection();
const playerCollection = PlayerCollection();

socketServer.on('CONNECTION_ESTABLISHED', (data, socket) => {
  console.log('CONNECTION_ESTABLISHED');
  socket.send(JSON.stringify({
    type: 'CONNECTION_ESTABLISHED',
    payload: { clientId: data.getId() }
  }));
});

socketServer.on('CONNECTION_CLOSED', () => {
  console.log('CONNECTION_CLOSED');
});

socketServer.on('CONNECTION_ERROR', () => {
  console.log('CONNECTION_ERROR');
});

socketServer.on('CREATE_PLAYER', (data, socket) => {
    const player = Player({ name: data.name });
    playerCollection.add(player);
    socket.send(
      JSON.stringify({
        type: 'PLAYER_CREATED',
        payload: {
          id: player.getId(),
          name: player.getName()
        }
      })
    );

});

socketServer.on('CREATE_GAME', (data, socket) => {
    const game = Game({
        createdBy: data.playerId,
        createdAt: Date.now(),
        name: data.roomName
      });
      gameCollection.add(game);
      socket.send(
        JSON.stringify({
          type: 'GAME_CREATED',
          payload: { gameId: game.getId() }
        })
      );
});
socketServer.on('JOIN_GAME', (data, socket) => {
    const game = gameCollection.getById(data.gameId);
    game.addPlayer(data.playerId);
    socket.send(
      JSON.stringify({
        type: 'GAME_JOINED',
        payload: { gameId: game.getId() }
      })
    );
});
socketServer.on('START_GAME', (data, socket) => {
    const game = gameCollection.getById(data.gameId);
    game.setIsActive(true);
    socket.send(
      JSON.stringify({
        type: 'GAME_STARTED',
        payload: { gameId: game.getId() }
      })
    );
});
socketServer.on('PAUSE_GAME', (data, socket) => {
    const game = gameCollection.getById(data.gameId);
      game.setIsPaused(true);
      socket.send(
        JSON.stringify({
          type: 'GAME_PAUSED',
          payload: { gameId: game.getId() }
        })
      );
});
socketServer.on('RESUME_GAME', (data, socket) => {
    const game = gameCollection.getById(data.gameId);
    game.setIsPaused(false);
    socket.send(JSON.stringify({ type: 'GAME_RESUMED' }));
});
socketServer.on('QUIT_GAME', (data, socket) => {
    const game = gameCollection.getById(data.gameId);
    game.setIsActive(false);
    // game.getPlayerIds().forEach(playerId => {
    //   playerCollection.getById(playerId).getScore();
    // });
    socket.send(JSON.stringify({ type: 'GAME_QUIT' }));
});
socketServer.on('EXIT_GAME', (data) => {
    console.log(data);
});
socketServer.on('PLAYER_ACTION', (data) => {
    console.log(data);
});
