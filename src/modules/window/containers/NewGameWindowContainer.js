import { connect } from 'react-redux';
import NewGameWindow from './../components/NewGameWindow';
import * as actions from './../windowActions';
import { getNameAvailable } from './../../game/gameSelectors';

const mapStateToProps = (state) => {
  console.log(getNameAvailable(state));
  return { nameAvailable: getNameAvailable(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (menuId, itemId) => {
      dispatch(actions.menuItemClicked(menuId, itemId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameWindow);
