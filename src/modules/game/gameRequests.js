// these actions are used only
// to send data or requests to the server
const gameRequests = client => ({

  createGame(game) {
    client.send({
      type: 'CREATE_GAME',
      payload: {
        name: game.name
      }
    });
  },

  startGame() {
    client.send({ type: 'START_GAME' });
  },

  validateGame({ name }) {
    client.send({
      type: 'VALIDATE_GAME',
      payload: {
        name
      }
    });
  },

  pauseGame() {
    client.send({ type: 'PAUSE_GAME' });
  },

  leaveGame() {
    client.send({ type: 'LEAVE_GAME' });
  },

  joinGame() {
    client.send({ type: 'JOIN_GAME' });
  },

  resumeGame() {
    client.send({ type: 'RESUME_GAME' });
  },

  quitGame() {
    client.send({ type: 'QUIT_GAME' });
  },

  listGames() {
    client.send({ type: 'LIST_GAMES' });
  }
});

export default gameRequests;
