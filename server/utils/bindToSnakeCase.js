const snakeCase = require('lodash.snakecase');

const bind = properties => {
    // console.log(Object.keys(actions));
    return Object.keys(properties).reduce((previous, current) => {
      return { ...previous,
        [snakeCase(current).toUpperCase()]: properties[current]
      };
    }, {});
  };


  module.exports = bind;
