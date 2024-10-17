/*
  Schema & Types
  - Extension -> GraphQL: Syntax Highlighting

  1. create schema.js
  2. index.js

  - int, float, string, boolean, ID
  - ID! -> not null -> required


*/

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js' // #

const server = new ApolloServer({
  typeDefs, // #
  //resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
})
console.log(`🚀  Server ready at: ${url}`)
