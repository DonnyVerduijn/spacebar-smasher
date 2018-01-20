export const gameValidated = (game) => {
  return {
    type: 'GAME_VALIDATED',
    ...game
  };
};

export const gameCreated = () => {
  return { type: 'GAME_CREATED' };
};
export const gameUpdated = () => {
  return { type: 'GAME_UPDATED' };
};
export const gameStarted = () => {
  return { type: 'GAME_STARTED' };
};
export const gamePaused = () => {
  return { type: 'GAME_PAUSED' };
};
export const gameJoined = () => {
  return { type: 'GAME_JOINED' };
};
export const gameLeaved = () => {
  return { type: 'GAME_LEAVED' };
};
export const gameQuit = () => {
  return { type: 'GAME_QUIT' };
};
export const gameResumed = () => {
  return { type: 'GAME_RESUMED' };
};
