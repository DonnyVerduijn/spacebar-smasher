import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewGameWindow from './../components/NewGameWindow';
import * as actions from './../windowActions';
import { getName, getIsValid } from './../../game/gameSelectors';
import { createGame, validateGame } from './../../game/gameRequests';

const mapStateToProps = (state, { socket }) => {
  // console.log(socket);
  return {
    name: getName(state),
    isValid: getIsValid(state),
    validateGame: (name) => {
      socket.send(validateGame(name));
    },
    createGame: (name) => {
      socket.send(createGame(name));
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchWindow: () => {
      dispatch(actions.switchWindow('NEW_USER'));
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewGameWindow));
