import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewGameWindow from './../components/NewGameWindow';
import { switchWindow } from './../windowActions';
import { getGame } from './../../game/gameSelectors';
import * as actions from './../../game/gameActions';

const mapStateToProps = (state) => {
  const game = getGame(state);
  return {
    game: {
      name: game.name || '',
      isValid: game.isValid || false,
      isValidated: game.isValidated || false
    }
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  const logger = {
    lastValidateGameRequest: null
  };
  return {
    instantiateGame: () => {
      socket.send(actions.instantiateGame());
    },
    previousWindow: () => {
      dispatch(switchWindow('NEW_USER'));
    },
    validateGame: (name, id) => {
      setTimeout(() => {
        if (Date.now() - logger.lastValidateGameRequest > 200) {
          socket.send(actions.validateGame({ name }));
        }
      }, 250);
      dispatch(actions.validateGame({ id, name, isValidated: false }));
      logger.lastValidateGameRequest = Date.now();
    },
    confirmGame: (name) => {
      socket.send(actions.confirmGame({ name }));
      dispatch(switchWindow('LOBBY'));
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewGameWindow));
