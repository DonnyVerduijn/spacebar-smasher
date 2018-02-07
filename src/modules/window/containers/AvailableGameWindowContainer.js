import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import AvailableGameWindow from './../components/AvailableGameWindow';
import { switchWindow } from './../windowActions';
import { getAllGames } from './../../game/gameSelectors';
import * as actions from './../../game/gameActions';

const mapStateToProps = state => {
  const availableGames = getAllGames(state);
  const games = availableGames.map(game => ({
    name: game ? game.name : '',
    users: game ? game.users.length : 0
  }));
  return {
    games
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    getAvailableGames: () => {
        socket.send(actions.availableGames());
    },
    previousWindow: () => {
      dispatch(switchWindow('MAIN'));
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(AvailableGameWindow)
);
