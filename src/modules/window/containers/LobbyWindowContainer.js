import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import LobbyWindow from './../components/LobbyWindow';
import { switchWindow } from './../windowActions';
import { getName, getUserIds } from './../../game/gameSelectors';
import { getUser } from './../../user/userSelectors';
import * as actions from './../../game/gameActions';

const mapStateToProps = state => {
  const users = getUserIds(state).map(id => {
    return getUser(state, id);
  });
  return {
    name: getName(state),
    users
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    startGame: () => {
      socket.send(actions.startGame());
    },
    quitGame: () => {
      socket.send(actions.quitGame());
      dispatch(switchWindow('MAIN'));
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(LobbyWindow)
);
