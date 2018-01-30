import { connect } from 'react-redux';
import MainWindow from './../components/MainWindow';
import * as actions from './../windowActions';

const menuItems = [
  { label: 'New game', target: 'NEW_USER' },
  { label: 'Join game', target: 'NEW_USER' },
  { label: 'Highscores', target: 'HIGHSCORES' }
];

const mapStateToProps = () => {
  return {
    menuItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listItemClicked: id => {
      dispatch(actions.listItemClicked(menuItems[id].target));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow);
