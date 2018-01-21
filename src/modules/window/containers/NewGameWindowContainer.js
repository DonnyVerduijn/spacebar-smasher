import { connect } from 'react-redux';
import NewGameWindow from './../components/NewGameWindow';
import * as actions from './../windowActions';
import { getNameAvailable } from './../../game/gameSelectors';
import { createGame } from './../../game/gameRequests';

const mapStateToProps = (state) => {
  return { nameAvailable: getNameAvailable(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: ({ name, windowId, itemId }) => {
      createGame(name);
      dispatch(actions.windowItemClicked(windowId, itemId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameWindow);
