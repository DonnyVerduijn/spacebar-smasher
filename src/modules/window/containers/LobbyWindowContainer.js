import { connect } from 'react-redux';

import withSocket from './../../../utils/withSocket';
import LobbyWindow from './../components/LobbyWindow';
import { switchWindow } from './../windowActions';
import { getGameUsers, getGameName } from './../../game/gameSelectors';
import { getUserName } from './../../user/userSelectors';
import * as actions from './../../game/gameActions';
import { getLocalGameId } from './../../window/windowSelectors';


const mapStateToProps = state => {
  return {
    gameName: getGameName(state, getLocalGameId(state)),
    users: getGameUsers(state, getLocalGameId(state)).map(({ id, joinedAt }) => {
      return { user: getUserName(state, id), joined: joinedAt };
    })
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
