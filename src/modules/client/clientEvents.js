const clientEvents = (client, dispatch, actions) => {
  client.on('CLIENT_CREATED', data => {
    dispatch(actions.clientCreated(data));
  });

  client.on('CLIENT_ERROR', data => {
    dispatch(actions.clientError(data));
  });

  client.on('CLIENT_CLOSED', data => {
    dispatch(actions.clientClosed(data));
  });
};

export default clientEvents;
