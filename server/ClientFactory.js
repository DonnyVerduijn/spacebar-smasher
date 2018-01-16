const Client = {
  getId() {
    return this.id;
  },
  getIpAddress() {
    return this.ipAddress;
  },
  getSocket() {
    return this.socket;
  }
};

const ClientFactory = ({ id, ipAddress, socket }) => {
  return Object.create(Client, {
    id: { value: id },
    ipAddress: { value: ipAddress },
    socket: { value: socket }
  });

};

module.exports = ClientFactory;
