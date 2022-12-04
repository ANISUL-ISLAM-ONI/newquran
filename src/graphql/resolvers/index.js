import noteResolvers from './note.js';
import userResolvers from './user.js';
import versesbytagResolvers from './versesbytag.js';
import metaResolvers from './meta.js';
import textResolvers from './suratext.js';
import translatedsuratextResolver from './translatedsuratext.js';
import transliterationsuratextResolver from './transliterationsuratext.js';

export default {
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