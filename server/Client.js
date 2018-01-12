const Client = ({ id, ipAddress, socket }) => {

  const getId = () => {
      return id;
    },
    getIpAddress = () => {
      return ipAddress;
    },
    getSocket = () => {
      return socket;
    };

  return {
    getId,
    getIpAddress,
    getSocket
  };
};

module.exports = Client;
