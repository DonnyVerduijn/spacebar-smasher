import { connect } from 'react-redux';

import withSocket from './../../../utils/withSocket';
import LobbyWindow from './../components/LobbyWindow';
import { switchWindow } from './../windowActions';
import { getJoinedUsers, getName } from './../../game/gameSelectors';
import { getUser } from './../../user/userSelectors';
import * as actions from './../../game/gameActions';
import { getLocalGameId } from './../../window/windowSelectors';


const mapStateToProps = state => {
  const users = getJoinedUsers(state, getLocalGameId(state)).map(({ id, joinedAt }) => {
    return { user: getUser(state, id).name, joined: joinedAt };
  });
  return {
    gameName: getName(state),
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
