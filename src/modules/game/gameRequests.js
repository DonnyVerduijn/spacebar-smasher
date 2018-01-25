// these actions are used only
// to send data or requests to the server

export const createGame = game => ({
  type: 'CREATE_GAME',
  name: game.name
});

export const startGame = () => ({
  type: 'START_GAME'
});

export const validateGame = ({ name }) => ({
  type: 'VALIDATE_GAME',
  name
});

export const pauseGame = () => ({
  type: 'PAUSE_GAME'
});

export const leaveGame = () => ({
  type: 'LEAVE_GAME'
});

export const joinGame = () => ({
  type: 'JOIN_GAME'
});

export const resumeGame = () => ({
  type: 'RESUME_GAME'
});

export const quitGame = () => ({
  type: 'QUIT_GAME'
});

export const listGames = () => ({
  type: 'LIST_GAMES'
});
