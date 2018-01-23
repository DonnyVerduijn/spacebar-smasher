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
    switchWindow: (target) => {
      dispatch(actions.switchWindow(target));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameWindow);
