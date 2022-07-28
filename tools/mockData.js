const users = [
    {
        id: 1,
        name: "jsmith",
        email: "1234",
        message: 1569268837119
    },
    {
        id: 2,
        name: "jdoe",
        email: "4567",
        message: 1569268837600
    }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
    users
};
