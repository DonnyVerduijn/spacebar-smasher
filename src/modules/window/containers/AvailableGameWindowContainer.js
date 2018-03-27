import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import AvailableGameWindow from './../components/AvailableGameWindow';
import { switchWindow } from './../windowActions';
import { getAllGames } from './../../game/gameSelectors';
import * as actions from './../../game/gameActions';

const mapStateToProps = state => {
  return {
    games: getAllGames(state)
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    getAvailableGames: () => {
        socket.send(actions.availableGames());
    },
    previousWindow: () => {
      dispatch(switchWindow('MAIN'));
    },
    joinGame: (id) => {
      socket.send(actions.joinGame({ id }));
      dispatch(switchWindow('LOBBY'));
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(AvailableGameWindow)
);
