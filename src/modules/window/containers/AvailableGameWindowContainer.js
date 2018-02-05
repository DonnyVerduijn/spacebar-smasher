import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import AvailableGameWindow from './../components/AvailableGameWindow';
import { switchWindow } from './../windowActions';
import { getAvailableGames } from './../../game/gameSelectors';
import * as actions from './../../game/gameActions';

const mapStateToProps = state => {
  const availableGames = getAvailableGames(state);
  return {
    games: availableGames.map(game => ({
        name: game.name,
        users: game.users.length
    }))
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
