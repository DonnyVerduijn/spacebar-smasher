
const UserCollection = require('../user/UserCollection');
const GameCollection = require('../game/GameCollection');
const StateContainer = require('../StateContainer');

// instantiate collections
const users = UserCollection();
const games = GameCollection();
const state = StateContainer();

state.add({
  users,
  games
});

module.exports = state;
