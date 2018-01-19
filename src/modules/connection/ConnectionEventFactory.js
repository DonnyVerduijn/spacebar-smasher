
const proto = {
    getId() {
        return this.id;
    }
};

const ConnectionEventFactory = ({ id, status }) => {

    const params = {
        createdAt: {
            value: Date.now(),
            writable: false
        },
        id: {
            value: id,
            writable: false
        },
        status: {
            value: status,
            writable: false
        }
    };

    return Object.create(proto, params);
};

export default ConnectionEventFactory;
