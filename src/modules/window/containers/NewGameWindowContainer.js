import { connect } from 'react-redux';
import NewGameWindow from './../components/NewGameWindow';
import * as actions from './../windowActions';
import { getName, getNameAvailable } from './../../game/gameSelectors';
import { createGame } from './../../game/gameRequests';

const mapStateToProps = (state) => {
  return {
    name: getName(state),
    nameAvailable: getNameAvailable(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: ({ windowId, itemId, name }) => {
      createGame(name);
      dispatch(actions.windowItemClicked(windowId, itemId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameWindow);
