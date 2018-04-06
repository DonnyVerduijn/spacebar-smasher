import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import LobbyWindow from './../components/LobbyWindow';
import { switchWindow } from './../windowActions';
import { navigateUser } from './../../user/userActions';
import * as actions from './../../game/gameActions';
import * as fromGame from './../../game/gameSelectors';
import * as fromUser from './../../user/userSelectors';
import { getLocalGameId, getLocalUserId } from './../../window/windowSelectors';

const mapStateToProps = state => {
  const localUserId = getLocalUserId(state);
  const game = fromGame.getById(state, getLocalGameId(state));
  return {
    game,
    users: game ? game.userIds.map(id => ({
      ...fromUser.getById(state, id),
      isLocal: id === localUserId
    })) : []
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    startGame: () => {
      socket.send(actions.startGame());
    },
    quitGame: () => {
      socket.send(actions.quitGame());
      socket.send(navigateUser('MAIN'));
      // we shortcut the window redirection locally
      dispatch(switchWindow('MAIN'));
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(LobbyWindow)
);
