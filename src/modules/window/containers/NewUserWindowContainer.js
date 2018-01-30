import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewUserWindow from './../components/NewUserWindow';
import { switchWindow } from './../windowActions';
import * as actions from './../../user/userActions';
import { getName, getIsValid } from './../../user/userSelectors';

const mapStateToProps = (state) => {
  return {
    name: getName(state),
    isValid: getIsValid(state)
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    previousWindow: () => {
      dispatch(switchWindow('MAIN'));
    },
    createUser: (name) => {
      socket.send(actions.createUser({ name }));
      dispatch(switchWindow('NEW_GAME'));
    },
    validateUser: name => {
      socket.send(actions.validateUser({ name }));
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewUserWindow));
