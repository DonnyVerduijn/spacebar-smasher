export const validateGame = (action) => {
  return {
    type: 'VALIDATE_GAME',
    ...action
  };
};

export const createGame = (action) => {
  return {
    type: 'CREATE_GAME',
    ...action
  };
};
export const updateGame = (action) => {
  return { type: 'UPDATE_GAME', ...action };
};
export const startGame = (action) => {
  return { type: 'START_GAME', ...action };
};
export const pauseGame = (action) => {
  return { type: 'PAUSE_GAME', ...action };
};
export const joinGame = (action) => {
  return { type: 'JOIN_GAME', ...action };
};
export const leaveGame = (action) => {
  return { type: 'LEAVE_GAME', ...action };
};
export const quitGame = (action) => {
  return { type: 'QUIT_GAME', ...action };
};
export const resumeGame = (action) => {
  return { type: 'RESUME_GAME', ...action };
};
