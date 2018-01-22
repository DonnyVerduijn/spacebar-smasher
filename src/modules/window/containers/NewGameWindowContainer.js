import { connect } from 'react-redux';
import NewGameWindow from './../components/NewGameWindow';
import * as actions from './../windowActions';
import { getName, getIsValid } from './../../game/gameSelectors';
import { createGame } from './../../game/gameRequests';

const mapStateToProps = (state) => {
  return {
    name: getName(state),
    isValid: getIsValid(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: ({ windowId, itemId, name }) => {
      createGame(name);
      dispatch(actions.backButtonClicked(windowId, itemId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameWindow);
