
const proto = {
    getId() {
        return this.id;
    }
};

const ConnectionEventFactory = ({ id, status }) => {

    const params = {
        createdAt: {
            value: Date.now(),
            writable: false,
            enumerable: true,
            configurable: false
        },
        id: {
            value: id,
            writable: false,
            enumerable: true,
            configurable: false
        },
        status: {
            value: status,
            writable: false,
            enumerable: true,
            configurable: false
        }
    };

    return Object.create(proto, params);
};

export default ConnectionEventFactory;
