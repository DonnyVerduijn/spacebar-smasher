import { connect } from 'react-redux';
import NewGameWindow from './../components/NewGameWindow';
import * as actions from './../windowActions';
import { getGameNameAvailable } from './../../game/gameSelectors';

const mapStateToProps = (state) => {
  console.log(getGameNameAvailable(state));
  return { gameNameAvailable: getGameNameAvailable(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (menuId, itemId) => {
      dispatch(actions.menuItemClicked(menuId, itemId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameWindow);
