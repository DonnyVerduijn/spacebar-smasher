import { connect } from 'react-redux';
import GameWindow from './../components/GameWindow';
import { getLocalGameId } from './../windowSelectors';
import * as fromGame from './../../game/gameSelectors';
import * as fromUser from './../../user/userSelectors';

const mapDispatchToProps = state => {
  const localGameId = getLocalGameId(state);
  const game = fromGame.getById(state, localGameId);
  return {
    game: game ? game : null,
    users: game ? game.userIds.map(userId => {
      const { name, score } = fromUser.getById(state, userId);
      return { name, score };
    }) : null
  };
};

export default connect(mapDispatchToProps)(GameWindow);
