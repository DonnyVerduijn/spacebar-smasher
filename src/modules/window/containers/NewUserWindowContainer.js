import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import NewUserWindow from './../components/NewUserWindow';
import { switchWindow } from './../windowActions';
import { createUser, validateUser } from './../../user/userRequests';
import { getName, getIsValid } from './../../user/userSelectors';

const mapStateToProps = (state, { socket }) => {
  return {
    name: getName(state),
    isValid: getIsValid(state),
    createUser: name => {
      socket.send(createUser(name));
    },
    validateUser: name => {
      socket.send(validateUser(name));
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    previousWindow: () => {
      dispatch(switchWindow('MAIN'));
    }
  };
};

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(NewUserWindow));
