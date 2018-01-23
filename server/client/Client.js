const proto = {
    send() {
        // send with socket
    }
};

const Client = (options) => {

    const params = {
        id: {
            value: options.id,
            writable: false,
            configurable: false,
            enumerable: true
        }
    };

    return Object.create(proto, params);
};

module.exports = Client;
