import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import LobbyWindow from './../components/LobbyWindow';
import { switchWindow } from './../windowActions';
import * as actions from './../../game/gameActions';
import { getGameUsers, getGameName, getGameOwner } from './../../game/gameSelectors';
import { getUserName } from './../../user/userSelectors';
import { getLocalGameId, getLocalUserId } from './../../window/windowSelectors';

const mapStateToProps = state => {
  const localGameId = getLocalGameId(state);
  const localUserId = getLocalUserId(state);
  return {
    isOwner: getGameOwner(state, localGameId) === localUserId,
    gameName: getGameName(state, localGameId),
    users: getGameUsers(state, localGameId).map(({ id, joinedAt }) => ({
      user: getUserName(state, id), joined: joinedAt
    }))
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    startGame: () => {
      socket.send(actions.startGame());
    },
    quitGame: () => {
      socket.send(actions.quitGame());
      // we shortcut the window redirection locally
      dispatch(switchWindow('MAIN'));
    },
    leaveGame: () => {
      socket.send(actions.leaveGame());
      dispatch(switchWindow('MAIN'));
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(LobbyWindow)
);
