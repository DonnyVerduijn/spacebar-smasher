const uuid = require('uuid4');

const proto = {
  getId() {
    return this.id;
  },
  getClientId() {
    return this.clientId;
  },
  getName() {
    return this.name;
  },
  setScore(value) {
    this.score += value;
  },
  getScore() {
    return this.score;
  }
};

const User = data => {

    const params = {
       id: {
         value: uuid(),
         writable: false
       },
       clientId: {
         value: data.clientId,
         writable: false
       },
       name: {
         value: data.name,
         writable: false
       },
       score: {
        value: 0,
        writable: true
      }
    };

    return Object.create(proto, params);
  };

  module.exports = User;
