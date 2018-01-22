import { connect } from 'react-redux';
import MainWindow from './../components/MainWindow';
import * as actions from './../windowActions';

const mapDispatchToProps = dispatch => {
  return {
    listItemClicked: (target) => {
      dispatch(actions.listItemClicked(target));
    }
  };
};

export default connect(null, mapDispatchToProps)(MainWindow);
