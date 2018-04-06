import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import AvailableUserWindow from './../components/AvailableUserWindow';
import { listUsers } from './../../user/userSelectors';
import * as actions from './../../user/userActions';
import { sendRequest } from './../../request/requestActions';
import { getLocalUserId } from './../windowSelectors';

const mapStateToProps = state => {
  const users = listUsers(state);
  const localUserId = getLocalUserId(state);
  const result = {
    localUserId,
    users: Object.keys(users)
      .map(id => users[id])
      .filter(
        user => user.isAvailable &&
          !user.isDeleted &&
          user.isConfirmed &&
          user.id !== localUserId
      )
      .sort((a, b) => {
        if (a.confirmedAt < b.confirmedAt) {
          return 1;
        }
        if (a.confirmedAt > b.confirmedAt) {
          return -1;
        }
        return 0;
      })
      .map(({ id, name }) => ({ id, name }))
  };
  return result;
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    availableUsers: () => {
      socket.send(actions.availableUsers());
    },
    unconfirmUser: () => {
      socket.send(actions.unconfirmUser());
    },
    navigateUser: options => {
      socket.send(actions.navigateUser(options));
      dispatch(actions.navigateUser(options));
    },
    sendRequest: options => {
      socket.send(sendRequest(options));
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(AvailableUserWindow)
);
