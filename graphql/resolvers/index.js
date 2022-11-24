const noteResolvers = require('./note');
const userResolvers = require('./user');
const versesbytagResolvers = require('./versesbytag');
const metaResolvers = require('./meta');
const textResolvers = require('./suratext');
const translatedsuratextResolver = require('./translatedsuratext');
const transliterationsuratextResolver = require('./transliterationsuratext');

module.exports = {
    Query: {
        ...noteResolvers.Query,
        ...userResolvers.Query,
        ...versesbytagResolvers.Query,
        ...metaResolvers.Query,
        ...textResolvers.Query,
        ...translatedsuratextResolver.Query,
        ...transliterationsuratextResolver.Query,
    },
    Mutation: {
        ...noteResolvers.Mutation,
        ...userResolvers.Mutation,
    }
}