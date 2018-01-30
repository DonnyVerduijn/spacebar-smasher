import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewGameWindow from './../components/NewGameWindow';
import { switchWindow } from './../windowActions';
import { getName, getIsValid } from './../../game/gameSelectors';
import * as actions from './../../game/gameActions';

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
      dispatch(switchWindow('NEW_USER'));
    },
    validateGame: (name) => {
      socket.send(actions.validateGame(name));
    },
    createGame: (name) => {
      socket.send(actions.createGame(name));
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewGameWindow));
