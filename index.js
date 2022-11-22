require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
// const dataSources = require('./graphql/datasources');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // dataSources: () => {
    //     return {
    //         ...dataSources
    //     }
    // },
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

mongoose.connect(process.env.DATABASE, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    console.log("DB connected successfully");
    return server.listen({port: process.env.PORT || 8000});
}).then(({url}) => {
    console.log(`🚀 Server running at ${url}`);
});