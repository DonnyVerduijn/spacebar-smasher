import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewGameWindow from './../components/NewGameWindow';
import { switchWindow } from './../windowActions';
import { getGame } from './../../game/gameSelectors';
import * as actions from './../../game/gameActions';
import { getLocalGameId } from './../../window/windowSelectors';
import debounce from 'lodash.debounce';

const mapStateToProps = state => {
  const id = getLocalGameId(state);
  const game = getGame(state, id);
  return {
    game: {
      id,
      exists: Boolean(game),
      name: game ? game.name : '',
      isValid: game ? game.isValid : false,
      isValidated: game ? game.isValidated : false
    }
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  const shouldValidate = debounce((id, name) => {
    socket.send(actions.validateGame({ name }));
  }, 200);
  return {
    instantiateGame: () => {
      socket.send(actions.instantiateGame());
    },
    previousWindow: () => {
      dispatch(switchWindow('NEW_USER'));
    },
    validateGame: (id, name) => {
      shouldValidate(id, name);
    },
    confirmGame: name => {
      socket.send(actions.confirmGame({ name }));
      dispatch(switchWindow('LOBBY'));
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(NewGameWindow)
);
