const userRequests = client => ({
  createUser(user) {
    client.send({
      type: 'CREATE_USER',
      payload: {
        name: user.name
      }
    });
  },

  updateUser(user) {
    client.send({
      type: 'UPDATE_USER',
      payload: user
    });
  },

  validateUser(name) {
    client.send({
      type: 'VALIDATE_USER',
      payload: { name }
    });
  }
});

export default userRequests;
