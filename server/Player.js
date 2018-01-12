const uuid = require('uuid4');

const Player = data => {
    const id = uuid();
    const { name } = data;
    let score = 0;
    return {
      getId: () => {
        return id;
      },
      getName: () => {
        return name;
      },
      setScore: value => {
        score += value;
      },
      getScore: () => {
        return score;
      }
    };
  };

  module.exports = Player;
