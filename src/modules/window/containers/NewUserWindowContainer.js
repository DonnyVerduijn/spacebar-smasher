import { connect } from 'react-redux';
import NewUserWindow from './../components/NewUserWindow';
import * as actions from './../windowActions';
import { createUser } from './../../user/userRequests';
import { getName, getIsValid } from './../../user/userSelectors';

const mapStateToProps = (state) => {
  return {
    name: getName(state),
    isValid: getIsValid(state),
    createUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    backButtonClicked: ({ target }) => {
      dispatch(actions.backButtonClicked(target));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserWindow);
