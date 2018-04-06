
const UserCollection = require('../user/UserCollection');
const GameCollection = require('../game/GameCollection');
const RequestCollection = require('../request/RequestCollection');
const StateContainer = require('../StateContainer');

// instantiate collections
const users = UserCollection();
const games = GameCollection();
const requests = RequestCollection();
const state = StateContainer();

state.add({
  users,
  games,
  requests
});

module.exports = state;
