
const userEvents = (client, dispatch, actions) => {
  client.on('USER_CREATED', user => {
    dispatch(actions.userCreated(user));
  });

  client.on('USER_UPDATED', user => {
    dispatch(actions.userUpdated(user));
  });

  client.on('USER_VALIDATED', user => {
    dispatch(actions.userValidated(user));
  });
};

export default userEvents;
