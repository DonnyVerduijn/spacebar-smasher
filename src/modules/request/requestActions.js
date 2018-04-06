export const sendRequest = action => ({
    type: 'SEND_REQUEST',
    ...action
});

export const cancelRequest = action => ({
    type: 'CANCEL_REQUEST',
    ...action
});

export const acceptRequest = action => ({
    type: 'ACCEPT_REQUEST',
    ...action
});

export const denyRequest = action => ({
    type: 'DENY_REQUEST',
    ...action
});
