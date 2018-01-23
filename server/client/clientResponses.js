

const connectionResponses = {
  clientCreated({ id }) {
    return {
      type: 'CLIENT_CREATED',
      payload: { id }
    };
  }
};

module.exports = connectionResponses;
