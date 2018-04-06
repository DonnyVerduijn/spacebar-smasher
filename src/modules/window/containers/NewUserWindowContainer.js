import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewUserWindow from './../components/NewUserWindow';
import * as actions from './../../user/userActions';
import * as fromUser from './../../user/userSelectors';
import { getLocalUserId } from './../../window/windowSelectors';
import debounce from 'lodash.debounce';

const mapStateToProps = state => {
  const id = getLocalUserId(state);
  const localUser = fromUser.getById(state, id);

  return {
    user: {
      id,
      exists: Boolean(localUser),
      name: localUser ? localUser.name : '',
      isValid: localUser ? localUser.isValid : false,
      isValidated: localUser ? localUser.isValidated : false
    }
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  const shouldValidate = debounce(({ name }) => {
    socket.send(actions.validateUser({ name }));
  }, 200);
  return {
    navigateUser: (options) => {
      socket.send(actions.navigateUser(options));
      dispatch(actions.navigateUser(options));
    },
    confirmUser: (options) => {
      socket.send(actions.confirmUser(options));
    },
    validateUser: (options) => {
      shouldValidate(options);
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(NewUserWindow)
);
