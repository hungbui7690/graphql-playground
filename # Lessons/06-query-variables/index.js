/*
  Query Variables
  1. schema.js
    -> setup query 
  2. resolvers


*/

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import db from './db.js'

const resolvers = {
  Query: {
    reviews() {
      return db.reviews
    },
    // review(parent, args) {} -> since we don't need parent -> change to underscore _
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id) // 2a.
    },
    games() {
      return db.games
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id) // 2b.
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id) // 2c.
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
})
console.log(`🚀  Server ready at: ${url}`)
