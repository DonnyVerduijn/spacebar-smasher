import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewUserWindow from './../components/NewUserWindow';
import { switchWindow } from './../windowActions';
import * as actions from './../../user/userActions';
import { getUser } from './../../user/userSelectors';
import { getId } from './../../socket/socketSelectors';
import debounce from 'lodash.debounce';
import { getActiveWindow } from '../windowSelectors';

const mapStateToProps = state => {
  const id = getId(state);
  const localUser = getUser(state, id);
  const targetWindow =
    getActiveWindow(state) === 'JOIN_GAME' ? 'AVAILABLE_GAMES' : 'NEW_GAME';
  return {
    targetWindow,
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
  const shouldValidate = debounce((id, name) => {
    socket.send(actions.validateUser({ name }));
  }, 200);
  return {
    instantiateUser: () => {
      socket.send(actions.instantiateUser());
    },
    previousWindow: () => {
      dispatch(switchWindow('MAIN'));
    },
    confirmUser: (name, target) => {
      socket.send(actions.confirmUser({ name }));
      dispatch(switchWindow(target));
    },
    validateUser: (id, name) => {
      shouldValidate(id, name);
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(NewUserWindow)
);
