import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewGameWindow from './../components/NewGameWindow';
import { switchWindow } from './../windowActions';
import { getGame } from './../../game/gameSelectors';
import { getUser } from './../../user/userSelectors';
import { getId } from './../../socket/socketSelectors';
import * as actions from './../../game/gameActions';

const mapStateToProps = (state, { socket }) => {
  const localUser = getUser(state, getId(state));
  const game = getGame(state);
  if (!game || game.ownerId !== localUser.id) {
    socket.send(actions.instantiateGame());
  };
  return {
    name: game.name || '',
    isValid: game.isValid || false
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    previousWindow: () => {
      dispatch(switchWindow('NEW_USER'));
    },
    validateGame: (name) => {
      socket.send(actions.validateGame({ name }));
    },
    createGame: (name) => {
      socket.send(actions.confirmGame({ name }));
      dispatch(switchWindow('LOBBY'));
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewGameWindow));
