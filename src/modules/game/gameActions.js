export const instantiateGame = (action) => {
  return {
    type: 'INSTANTIATE_GAME',
    ...action
  };
};

export const validateGame = (action) => {
  return {
    type: 'VALIDATE_GAME',
    ...action
  };
};

export const confirmGame = (action) => {
  return {
    type: 'CONFIRM_GAME',
    ...action
  };
};
export const startGame = () => {
  return { type: 'START_GAME' };
};
export const pauseGame = () => {
  return { type: 'PAUSE_GAME' };
};
export const joinGame = () => {
  return { type: 'JOIN_GAME' };
};
export const leaveGame = () => {
  return { type: 'LEAVE_GAME' };
};
export const quitGame = () => {
  return { type: 'QUIT_GAME' };
};
export const resumeGame = () => {
  return { type: 'RESUME_GAME' };
};
export const availableGames = (action) => {
  return { type: 'AVAILABLE_GAMES',
    ...action
  };
};
