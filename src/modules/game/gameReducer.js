
const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GAME_CREATED':
        return state;
        case 'GAME_STARTED':
        return state;
        case 'GAME_UPDATED':
        return state;
        case 'GAME_LEAVED':
        return state;
        case 'GAME_JOINED':
        return state;
        case 'GAME_PAUSED':
        return state;
        case 'GAME_RESUMED':
        return state;
        case 'GAME_QUIT':
        return state;
        default:
        return state;
    }
};

export default gameReducer;
