export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review] 
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game! 
    author: Author! 
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review] 
  }
  type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
    review(id: ID!): Review 
    game(id: ID!): Game
    author(id: ID!): Author
  }
  # 2. mutation
  type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
  }
  # 1. input !== type
  input AddGameInput {
    title: String!,
    platform: [String!]!
  }
`
