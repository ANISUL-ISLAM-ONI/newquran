"use strict";

require('dotenv').config();
var _require = require('apollo-server'),
  ApolloServer = _require.ApolloServer;
var _require2 = require('apollo-server-core'),
  ApolloServerPluginLandingPageLocalDefault = _require2.ApolloServerPluginLandingPageLocalDefault;
var mongoose = require('mongoose');
var typeDefs = require('./graphql/typeDefs');
var resolvers = require('./graphql/resolvers');
// const dataSources = require('./graphql/datasources');

var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  // dataSources: () => {
  //     return {
  //         ...dataSources
  //     }
  // },
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({
    embed: true
  })]
});
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function () {
  console.log("DB connected successfully");
  return server.listen({
    port: process.env.PORT || 8000
  });
}).then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80 Server running at ".concat(url));
});