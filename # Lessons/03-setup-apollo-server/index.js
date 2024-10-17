/*
  Setup Apollo Server
  - GraphQL Zero: https://graphqlzero.almansi.me/#example-top
    -> fake data for graphql
  - Apollo Docs: https://www.apollographql.com/docs/apollo-server/-intro/
  - Apollo Sandbox: https://www.apollographql.com/docs/graphos/explorer/sandbox/

  ~~ npm install @apollo/server graphql


*/

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const server = new ApolloServer({
  //typeDefs,
  //resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
})
console.log(`🚀  Server ready at: ${url}`)
