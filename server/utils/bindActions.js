const snakeCase = require('lodash.snakecase');

const bindActions = actions => {
    // console.log(Object.keys(actions));
    return Object.keys(actions).reduce((previous, current) => {
      return { ...previous,
        [snakeCase(current).toUpperCase()]: actions[current]
      };
    }, {});
  };


  module.exports = bindActions;