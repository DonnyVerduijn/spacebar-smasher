import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewUserWindow from './../components/NewUserWindow';
import { switchWindow } from './../windowActions';
import * as actions from './../../user/userActions';
import { getUser } from './../../user/userSelectors';
import { getId } from './../../socket/socketSelectors';

const mapStateToProps = state => {
  const id = getId(state);
  const localUser = getUser(state, id);
  return {
    user: {
      id,
      name: localUser ? localUser.name : '',
      isValid: localUser ? localUser.isValid : false
    }
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  const logger = {
    lastValidateUserRequest: null
  };
  return {
    instantiateUser: () => {
      socket.send(actions.instantiateUser());
    },
    previousWindow: () => {
      dispatch(switchWindow('MAIN'));
    },
    confirmUser: name => {
      socket.send(actions.confirmUser({ name }));
      dispatch(switchWindow('NEW_GAME'));
    },
    validateUser: (id, name, isValid) => {
      setTimeout(() => {
        if (Date.now() - logger.lastValidateUserRequest > 200) {
          socket.send(actions.validateUser({ name }));
        }
      }, 250);
      const isValidNow = name.length > 0 ? false : isValid;
      dispatch(actions.validateUser({ id, name, isValid: isValidNow }));
      logger.lastValidateUserRequest = Date.now();
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(NewUserWindow)
);
