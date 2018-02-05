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
      isValid: game.isValid || false
    }
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    instantiateGame: () => {
      socket.send(actions.instantiateGame());
    },
    previousWindow: () => {
      dispatch(switchWindow('NEW_USER'));
    },
    validateGame: (name, id) => {
      dispatch(actions.validateGame({ id, name }));
      socket.send(actions.validateGame({ name }));
    },
    confirmGame: (name) => {
      socket.send(actions.confirmGame({ name }));
      dispatch(switchWindow('LOBBY'));
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewGameWindow));
