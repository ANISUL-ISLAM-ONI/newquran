const noteResolvers = require('./note');
const userResolvers = require('./user');

module.exports = {
    Query: {
        ...noteResolvers.Query,
        ...userResolvers.Query,
    },
    Mutation: {
        ...noteResolvers.Mutation,
        ...userResolvers.Mutation,
    }
}