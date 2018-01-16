const ResponseLogger = () => {
  const responses = [];

  // private Response Class declaration
  const Response = (response) => {
    const createdAt = Date.now();

    const hasSucceeded = () => {
      return response.ok;
    };
    return {
      hasSucceeded,
      createdAt
    };
  };

  const consecutiveRejections = () => {
    // create an array of responses thei
    const responseStatuses = responses
      .map(response => {
        return response.hasSucceeded();
      }).reverse();

    let index;
    for (index = 0; index < responseStatuses.length; index += 1) {
        if (responseStatuses[index] === true) {
            return index;
        }
    }
    return index;
  },
  getAttemptCount = () => {
    return responses.length;
  },
  log = (response) => {
    responses.push(Response(response));
  };

  return {
    log,
    getAttemptCount,
    consecutiveRejections
  };
};

export default ResponseLogger;
