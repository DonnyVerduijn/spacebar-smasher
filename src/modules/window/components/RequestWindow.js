import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import Flex from './../../../components/Flex';
import Button from './../../../components/Button';
import Display from './../../../components/Display';
// import Close from 'material-ui-icons/Close';

const RequestWindow = ({
  requestId,
  hasReceived,
  originUser,
  localUserId,
  cancelRequest,
  denyRequest,
  acceptRequest
}) => {
  return (
    <Window>
      {originUser
        ? <Display>
          {hasReceived
            ? `${originUser.name} wants to fight.`
            : 'Waiting for response...'}
        </Display>
       : null}
      {hasReceived
        ? <Flex justifyContent="space-between">
          <Button
            className="Raised"
            label={'Deny'}
            onClick={() => denyRequest({ requestId, id: localUserId, location: 'AVAILABLE_USERS' })}
          />
          <Button
            label="Accept"
            className="Raised"
            onClick={() => acceptRequest({ requestId, id: localUserId, location: 'GAME' })}
          />
        </Flex>
       : <Button
          className="Raised"
          label={'Cancel'}
          onClick={() => cancelRequest({ requestId, id: localUserId, location: 'AVAILABLE_USERS' })}
        />
      }
    </Window>
  );
};

RequestWindow.propTypes = {
  requestId: PropTypes.string,
  hasReceived: PropTypes.bool,
  originUser: PropTypes.object,
  localUserId: PropTypes.string,
  denyRequest: PropTypes.func,
  cancelRequest: PropTypes.func,
  acceptRequest: PropTypes.func
};

export default RequestWindow;
