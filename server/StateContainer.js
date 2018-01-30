
const proto = {
    add(partialState) {
        Object.keys(partialState).forEach(key => {
            this[key] = partialState[key];
        });
    }
};

const StateContainer = () => {
    return Object.create(proto);
};

module.exports = StateContainer;
