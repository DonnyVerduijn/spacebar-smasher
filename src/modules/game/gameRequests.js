import socketClient from './../utils/SocketClient';

// these actions are used only
// to send data or requests to the server

export const createGame = name => {
  socketClient.send({
    type: 'CREATE_GAME',
    payload: {
      name
      // userId,
    }
  });
};

export const startGame = () => {
  socketClient.send({ type: 'START_GAME' });
};

export const pauseGame = () => {
  socketClient.send({ type: 'PAUSE_GAME' });
};

export const leaveGame = () => {
  socketClient.send({ type: 'LEAVE_GAME' });
};

export const joinGame = () => {
  socketClient.send({ type: 'JOIN_GAME' });
};

export const resumeGame = () => {
  socketClient.send({ type: 'RESUME_GAME' });
};

export const quitGame = () => {
  socketClient.send({ type: 'QUIT_GAME' });
};

export const listGames = () => {
  socketClient.send({ type: 'LIST_GAMES' });
};
