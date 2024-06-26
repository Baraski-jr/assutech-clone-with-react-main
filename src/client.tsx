// src/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/uzhbfecz1i06',
    headers: {
      Authorization: `Bearer pOJaIiTIEcRr9Ff931mCM1Kg4ZHo6_VpnPUa4XS2Yc4`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
