import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'

const LinkAPIServer = new HttpLink({
  uri: process.env.REACT_APP_API_URI || 'http://localhost:4000/graphql',
})

const apolloClient = new ApolloClient({
  link: from([LinkAPIServer]),
  cache: new InMemoryCache(),
})

export default apolloClient
