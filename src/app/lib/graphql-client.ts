import { GraphQLClient } from "graphql-request"
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/u758xozvs7bq/environments/master`,
})

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CDA_TOKEN}`,
    },
  }
})

export const apolloClient = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/u758xozvs7bq/environments/master`,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

export const apolloClientWordpress = new ApolloClient({
  uri: `https://simoncolman.com/graphql`,
  cache: new InMemoryCache(),
})

export const graphqlClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/u758xozvs7bq/environments/master`,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CDA_TOKEN}`,
    },
  }
)
