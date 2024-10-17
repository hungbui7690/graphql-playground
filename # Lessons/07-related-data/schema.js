export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review] # 2a.
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game! # 1a. 
    author: Author! # 1b.
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review] # 2b.
  }
  type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
    review(id: ID!): Review 
    game(id: ID!): Game
    author(id: ID!): Author
  }
`
