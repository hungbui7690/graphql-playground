/*
  Resolver Functions
  - handle incoming requests & return data to client


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  - create db.js -> fake database



*/

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import db from './db.js' // 1.

const resolvers = {
  // 2. since we create Query in schema.js -> now, we can use it here
  Query: {
    games() {
      return db.games
    },
    authors() {
      return db.authors
    },
    reviews() {
      return db.reviews
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers, // 3.
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
})
console.log(`🚀  Server ready at: ${url}`)
