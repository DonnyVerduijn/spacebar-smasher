import { connect } from 'react-redux';
import GameWindow from './../components/GameWindow';
import { getLocalGameId } from './../windowSelectors';
import { getGameUsers, getGame } from './../../game/gameSelectors';
import { getUserName, getUserScore } from './../../user/userSelectors';

const mapDispatchToProps = state => {
  const localGameId = getLocalGameId(state);

  return {
    game: getGame(state, localGameId),
    users: getGameUsers(state, localGameId).map(userId => ({
      name: getUserName(state, userId),
      score: getUserScore(state, userId)
    }))
  };
};

export default connect(mapDispatchToProps)(GameWindow);
