const Client = require('./Client');
const ClientCollection = require('./ClientCollection');
const clients = ClientCollection();

const clientActions = {
  createClient(id) {
    const client = Client({ id });
    clients.add(client);
    console.log(`Client connected. clientId: ${id}`);
    return client;
  },
  closeClient(id) {
    const client = clients.getById(id);
    // client.terminate();
    // clients.removeById(client.id)
    console.log(`Client closed. clientId: ${id}`);
    return client;
  },
  errorClient(id) {
    const client = clients.getById(id);
    console.log(`Client error. clientId: ${id}`);
    return client;
  }
};

module.exports = clientActions;
