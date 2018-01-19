import { connect } from 'react-redux';
import MainMenuWindow from './../../../app/MainMenuWindow';
import * as actions from './../menuActions';

const mapDispatchToProps = dispatch => {
  return {
    onClick: (menuId, itemId) => {
      dispatch(actions.menuItemClicked(menuId, itemId));
    }
  };
};

export default connect(null, mapDispatchToProps)(MainMenuWindow);
