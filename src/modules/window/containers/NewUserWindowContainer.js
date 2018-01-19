import { connect } from 'react-redux';
import NewUserWindow from './../../../app/NewUserWindow';
import * as actions from './../menuActions';

const mapDispatchToProps = dispatch => {
  return {
    onClick: (menuId, itemId) => {
      dispatch(actions.menuItemClicked(menuId, itemId));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewUserWindow);
