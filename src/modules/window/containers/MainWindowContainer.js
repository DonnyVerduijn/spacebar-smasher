import { connect } from 'react-redux';
import MainWindow from './../components/MainWindow';
import * as actions from './../windowActions';

const menuItems = [
  { value: 'New game', target: 'NEW_USER' },
  { value: 'Join game', target: 'NEW_USER' },
  { value: 'Highscores', target: 'HIGHSCORES' }
];

const mapStateToProps = () => {
  return {
    menuItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listItemClicked: id => {
      dispatch(actions.switchWindow(menuItems[id].target));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow);
