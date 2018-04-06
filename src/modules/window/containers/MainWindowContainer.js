import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import MainWindow from './../components/MainWindow';
import { navigateUser } from './../../user/userActions';
import { getLocalUserId } from './../../window/windowSelectors';

const menuItems = [
  { value: 'New game', target: 'NEW_USER' },
  // { value: 'Join game', target: 'JOIN_GAME' },
  { value: 'Highscores', target: 'HIGHSCORES' },
  { value: 'About', target: 'ABOUT' }
];

const mapStateToProps = state => {
  return {
    localUserId: getLocalUserId(state),
    menuItems
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    listItemClicked: ({ itemId, userId }) => {
      socket.send(
        navigateUser({
          location: menuItems[itemId].target
        })
      );
      dispatch(
        navigateUser({
          location: menuItems[itemId].target,
          id: userId
        })
      );
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(MainWindow)
);
