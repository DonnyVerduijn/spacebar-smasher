import { connect } from 'react-redux';
import NewUserWindow from './../components/NewUserWindow';
import * as actions from './../windowActions';
import { createUser } from './../../user/userRequests';
import { getName, getNameAvailable } from './../../user/userSelectors';

const mapStateToProps = (state) => {
  return {
    name: getName(state),
    nameAvailable: getNameAvailable(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: ({ windowId, itemId, name }) => {
      createUser({ name });
      dispatch(actions.windowItemClicked(
        windowId,
        itemId
      ));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserWindow);
