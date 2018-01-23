const connectionActions = {
  establishConnection(client) {
    console.log(`Connection established. clientId: ${client.id}`);
    return client;
  },
  closeConnection(client) {
    console.log(`Connection closed. clientId: ${client.id}`);
    return client;
  },
  errorConnection(client) {
    console.log(`Connection error. clientId: ${client.id}`);
    return client;
  }
};

module.exports = connectionActions;
