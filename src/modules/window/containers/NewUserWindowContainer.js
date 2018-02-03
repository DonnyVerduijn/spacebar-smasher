import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewUserWindow from './../components/NewUserWindow';
import { switchWindow } from './../windowActions';
import * as actions from './../../user/userActions';
import { getUser } from './../../user/userSelectors';
import { getId } from './../../socket/socketSelectors';

const mapStateToProps = (state, { socket }) => {
  const localUser = getUser(state, getId(state));
  if (!localUser) {
    socket.send(actions.instantiateUser());
  }
  return {
    name: localUser ? localUser.name : '',
    isValid: localUser ? localUser.isValid : false
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    previousWindow: () => {
      dispatch(switchWindow('MAIN'));
    },
    confirmUser: (name) => {
      socket.send(actions.confirmUser({ name }));
      dispatch(switchWindow('NEW_GAME'));
    },
    validateUser: name => {
      socket.send(actions.validateUser({ name }));
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewUserWindow));
