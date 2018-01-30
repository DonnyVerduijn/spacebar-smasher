import gameState from './gameState.json';

const gameReducer = (game = gameState, action) => {
    switch (action.type) {
        case 'VALIDATE_GAME':
        return Object.assign({}, game, {
            isValid: action.isValid,
            name: action.name
        });
        case 'CREATE_GAME':
        return Object.assign({}, game, {
            id: action.gameId,
            name: action.name,
            ownerId: action.ownerId,
            users: action.users
        });
        case 'START_GAME':
        return game;
        case 'UPDATE_GAME':
        return game;
        case 'LEAVE_GAME':
        return game;
        case 'JOIN_GAME':
        return game;
        case 'PAUSE_GAME':
        return game;
        case 'RESUME_GAME':
        return game;
        case 'QUIT_GAME':
        return game;
        default:
        return game;
    }
};

export default gameReducer;
