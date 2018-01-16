const ConnectionAttempt = (connection) => {
  const createdAt = Date.now();

  const getResponse = () => {
    return connection.response;
  };

  return {
    getResponse,
    createdAt
  };
};

export default ConnectionAttempt;
