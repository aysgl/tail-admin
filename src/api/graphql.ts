import { GraphQLClient } from 'graphql-request'

const endpoint =
  'https://graphqlzero.almansi.me/api'

export const graphqlClient = new GraphQLClient(
  endpoint,
)
