import { connect } from 'react-redux';
import withSocket from './../../../utils/withSocket';
import RequestWindow from './../components/RequestWindow';
import { getLocalUserId } from './../../window/windowSelectors';
import * as fromUser from './../../user/userSelectors';
import * as fromRequest from './../../request/requestSelectors';
import { navigateUser } from './../../user/userActions';
import {
  cancelRequest,
  denyRequest,
  acceptRequest
} from './../../request/requestActions';

const mapStateToProps = state => {
  const localUserId = getLocalUserId(state);
  const request = fromRequest.getMostRecent(state);
  return {
    localUserId,
    requestId: request ? request.id : null,
    hasReceived: request ? request.destinationUserId === localUserId : false,
    originUser: request ? fromUser.getById(state, request.originUserId) : null,
    destinationUser: request ? fromUser.getById(state, request.destinationUserId) : null
  };
};

const mapDispatchToProps = (dispatch, { socket }) => {
  return {
    cancelRequest: (options) => {
      socket.send(cancelRequest(options));
      dispatch(navigateUser(options));
    },
    denyRequest: (options) => {
      socket.send(denyRequest(options));
      dispatch(navigateUser(options));
    },
    acceptRequest: (options) => {
      socket.send(acceptRequest(options));
      dispatch(navigateUser(options));
    }
  };
};

export default withSocket(
  connect(mapStateToProps, mapDispatchToProps)(RequestWindow)
);
