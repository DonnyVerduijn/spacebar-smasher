import gameState from './gameState.json';

const gameReducer = (game = gameState, action) => {
    switch (action.type) {
        case 'GAME_VALIDATED':
        return Object.assign({}, game, {
            nameAvailable: action.nameAvailable
        });
        case 'GAME_CREATED':
        return Object.assign({}, game, {
            id: action.id,
            name: action.name
        });
        case 'GAME_STARTED':
        return game;
        case 'GAME_UPDATED':
        return game;
        case 'GAME_LEAVED':
        return game;
        case 'GAME_JOINED':
        return game;
        case 'GAME_PAUSED':
        return game;
        case 'GAME_RESUMED':
        return game;
        case 'GAME_QUIT':
        return game;
        default:
        return game;
    }
};

export default gameReducer;
