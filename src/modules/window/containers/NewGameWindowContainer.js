import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewGameWindow from './../components/NewGameWindow';
import * as actions from './../windowActions';
import { getName, getIsValid } from './../../game/gameSelectors';
import { createGame, validateGame } from './../../game/gameActions';

const mapStateToProps = (state) => {
  // console.log(socket);
  return {
    name: getName(state),
    isValid: getIsValid(state)
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    switchWindow: () => {
      dispatch(actions.switchWindow('NEW_USER'));
    },
    validateGame: (name) => {
      const action = validateGame(name);
      socket.send();
      dispatch(action);
    },
    createGame: (name) => {
      const action = createGame(name);
      socket.send();
      dispatch(action);
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewGameWindow));
