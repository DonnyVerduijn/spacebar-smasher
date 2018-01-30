// these request implement the representation from
// the payload of the request.
// to send data or requests to the server

export const createGame = request => ({
  type: 'CREATE_GAME',
  name: request.name
});

export const startGame = request => ({
  type: 'START_GAME',
  id: request.id
});

export const validateGame = request => ({
  type: 'VALIDATE_GAME',
  name: request.name
});

export const pauseGame = request => ({
  type: 'PAUSE_GAME',
  id: request.id
});

export const leaveGame = request => ({
  type: 'LEAVE_GAME',
  id: request.id
});

export const joinGame = request => ({
  type: 'JOIN_GAME',
  id: request.id
});

export const resumeGame = request => ({
  type: 'RESUME_GAME',
  id: request.id
});

export const quitGame = request => ({
  type: 'QUIT_GAME',
  id: request.id
});

export const listGames = request => ({
  type: 'LIST_GAMES',
  id: request.id
});
