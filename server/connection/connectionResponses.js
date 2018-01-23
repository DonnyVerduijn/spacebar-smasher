

const connectionResponses = {
  establishConnection({ id }) {
    return {
      type: 'CONNECTION_ESTABLISHED',
      payload: { id }
    };
  }
};

module.exports = connectionResponses;
