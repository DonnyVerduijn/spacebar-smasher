const socketResponses = {
    socketConnected(response) {
        return {
            type: 'SOCKET_CONNECTED',
            id: response.id
     };
    },
    socketClosed() {
        return { type: 'SOCKET_CLOSED' };
    },
    socketError() {
        return { type: 'SOCKET_ERROR' };
    }
};
module.exports = socketResponses;
