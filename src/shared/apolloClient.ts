import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = 'https://api.github.com/graphql';

if (!process.env.REACT_APP_GH_TOKEN) {
  throw new Error('REACT_APP_GH_TOKEN is missing!');
}

export const apolloClient = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`,
  },
});
