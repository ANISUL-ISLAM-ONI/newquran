// require('dotenv').config();
// const { ApolloServer } = require('apollo-server');
// const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
// const mongoose = require('mongoose');
// const typeDefs = require('./graphql/typeDefs');
// const resolvers = require('./graphql/resolvers');
// // const dataSources = require('./graphql/datasources');

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     // dataSources: () => {
//     //     return {
//     //         ...dataSources
//     //     }
//     // },
//     csrfPrevention: true,
//     cache: 'bounded',
//     plugins: [
//         ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//     ],
// });

// mongoose.connect(process.env.DATABASE, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
//     console.log("DB connected successfully");
//     return server.listen({hostname: "0.0.0.0", port: process.env.PORT || 8000});
// }).then(({url}) => {
//     console.log(`🚀 Server running at ${url}`);
// });


require('dotenv').config();
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } = require('@apollo/server/plugin/landingPage/default');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const startApolloServer = async () => {
    const app = express();
    const httpServer = http.createServer(app);
    let server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            // ApolloServerPluginLandingPageLocalDefault({ embed: true }),
            ApolloServerPluginLandingPageProductionDefault({ embed: true }),
            ApolloServerPluginDrainHttpServer({ httpServer }),
        ],
    });
    mongoose.connect(process.env.DATABASE, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
        console.log("DB connected successfully");
    });
    await server.start();

    // Set up our Express middleware to handle CORS, body parsing,
    // and our expressMiddleware function.
    app.use(
    '/',
    cors(),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    }),
    );

    // Modified server startup
    await new Promise((resolve) => httpServer.listen({ port: process.env.PORT || 4000 }, resolve));

    console.log(`🚀 Server ready at http://localhost:8080/`);
}

// module.exports = startApolloServer;
startApolloServer();