export const typeDefs = `#graphql
  # set up types
  type Game {
    id: ID!
    title: String!
    platform: [String!]! # outside of square brackets
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }

  # setup query -> must have this 
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]
  }
`
