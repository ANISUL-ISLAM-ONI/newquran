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


import * as dotenv from 'dotenv';
dotenv.config();
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import mongoose from 'mongoose';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';

const startApolloServer = async () => {
    const app = express();
    const httpServer = http.createServer(app);
    let server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: process.env.NODE_ENV === 'production',
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            // ApolloServerPluginLandingPageLocalDefault({ embed: true }),
            ApolloServerPluginLandingPageProductionDefault({ embed: true, graphRef: process.env.APOLLO_GRAPH_REF}),
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

startApolloServer();