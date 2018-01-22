const connectionActions = {
  establishConnection(client) {
    console.log(`Connection established. clientId: ${client.id}`);
    return new Promise(resolve => {
      resolve(client);
    });
  },
  closeConnection(client) {
    console.log(`Connection closed. clientId: ${client.id}`);
  },
  errorConnection(client) {
    console.log(`Connection error. clientId: ${client.id}`);
  }
};

module.exports = connectionActions;
