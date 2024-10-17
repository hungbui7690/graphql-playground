/*
  Related Data
  - each review has game_id & author_id
  - right now, each game has multiple reviews -> but apollo doesn't know the nested structure like the query below 
    -> query GameQuery($id: ID!) {
          game(id: $id) {
            id
            title
            platform
            reviews {
              id
              rating
            }
          }
        }
    -> query ReviewQuery($id: ID!) {
      review(id: $id) {
        rating
        game{
          title
          reviews {
            rating
          }
        }
      }
    }

  - so that, we need to setup 
    1. schema.js
    2. resolvers -> setup Game query 


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
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id)
    },
    games() {
      return db.games
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id)
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },
  },

  // 3. this is used to setup nested query -> since the nested request refers to the Game query, we need to add this
  Game: {
    // # parent === game object
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id)
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id)
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id)
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id)
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
