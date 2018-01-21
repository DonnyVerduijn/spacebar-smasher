import { connect } from 'react-redux';
import MainWindow from './../components/MainWindow';
import * as actions from './../windowActions';

const mapDispatchToProps = dispatch => {
  return {
    onClick: (menuId, itemId) => {
      dispatch(actions.windowItemClicked(menuId, itemId));
    }
  };
};

export default connect(null, mapDispatchToProps)(MainWindow);
