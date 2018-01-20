import { connect } from 'react-redux';
import NewUserWindow from './../components/NewUserWindow';
import * as actions from './../windowActions';
import { getNameAvailable } from './../../user/userSelectors';

const mapStateToProps = (state) => {
  return { nameAvailable: getNameAvailable(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (menuId, itemId) => {
      dispatch(actions.menuItemClicked(menuId, itemId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserWindow);
