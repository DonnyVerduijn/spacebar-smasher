// import uuid from 'uuid4';

const Request = require('./Request');
const Game = require('./../game/Game');

const requestActions = ({ users, requests, games }) => {
  return {
    cancelRequest(action) {
      const request = requests.getById(action.requestId);
      const originUser = users.getById(request.originUserId);
      const destinationUser = users.getById(request.destinationUserId);
      originUser.setCurrentWindow('AVAILABLE_USERS');
      originUser.setIsAvailable(true);
      destinationUser.setCurrentWindow('AVAILABLE_USERS');
      destinationUser.setIsAvailable(true);
      requests.deleteById(request.id);
      return {
        type: action.type,
        users: {
          [originUser.id]: originUser,
          [destinationUser.id]: destinationUser
        },
        targets: Object.keys(users.listByCurrentWindow('AVAILABLE_USERS'))
      };
    },
    denyRequest(action) {
      const request = requests.getById(action.requestId);
      const originUser = users.getById(request.originUserId);
      const destinationUser = users.getById(request.destinationUserId);
      originUser.setCurrentWindow('AVAILABLE_USERS');
      originUser.setIsAvailable(true);
      destinationUser.setCurrentWindow('AVAILABLE_USERS');
      destinationUser.setIsAvailable(true);
      requests.deleteById(request.id);
      return {
        type: action.type,
        users: {
          [originUser.id]: originUser,
          [destinationUser.id]: destinationUser
        },
        targets: Object.keys(users.listByCurrentWindow('AVAILABLE_USERS'))
      };
    },
    acceptRequest(action) {
      const request = requests.getById(action.requestId);
      const originUser = users.getById(request.originUserId);
      const destinationUser = users.getById(request.destinationUserId);
      originUser.setCurrentWindow('GAME');
      destinationUser.setCurrentWindow('GAME');
      requests.deleteById(request.id);

      const userIds = [originUser.id, destinationUser.id];
      const game = Game({ userIds });
      games.add(game);

      return {
        type: action.type,
        games: { [game.id]: game },
        users: {
          [originUser.id]: originUser,
          [destinationUser.id]: destinationUser
        },
        targets: [request.originUserId, request.destinationUserId]
      };
    },
    sendRequest(action) {
      const originUser = users.getById(action.userId);
      const destinationUser = users.getById(action.destinationUserId);
      const request = Request({
        originUserId: originUser.id,
        destinationUserId: destinationUser.id
      });

      originUser.setCurrentWindow('REQUEST');
      originUser.setIsAvailable(false);
      destinationUser.setCurrentWindow('REQUEST');
      destinationUser.setIsAvailable(false);
      requests.add(request);
      return {
        type: action.type,
        request,
        users: {
          [originUser.id]: originUser,
          [destinationUser.id]: destinationUser
        },
        targets: [
          originUser.id,
          destinationUser.id,
          ...Object.keys(users.listByCurrentWindow('AVAILABLE_USERS'))
        ]
      };
    }
  };
};

module.exports = requestActions;
