import ConnectionAttempt from './ConnectionAttempt';

const ClientSession = () => {
  const connectionAttempts = [];

  const log = connection => {
    const attempt = ConnectionAttempt(connection);
    connectionAttempts.push(attempt);
  };
  const consecutiveFailedAttempts = () => {

    const responses = connectionAttempts
      .map(attempt => {
        return attempt.getResponse();
      });

    let index = 0;
    for (index = responses.length; index > 0; index -= 1) {
        if (responses[index] === false) {
            return index;
        }
    }
    return index;
  },
  getAttemptCount = () => {
    return connectionAttempts.length;
  };

  return {
    log,
    getAttemptCount,
    consecutiveFailedAttempts
  };
};

export default ClientSession;
