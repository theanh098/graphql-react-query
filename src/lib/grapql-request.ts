import { GraphQLClient } from 'graphql-request';

const requestHeaders = {
  authorization: 'Bearer MY_TOKEN'
};

const graphqlRequestClient = new GraphQLClient(
  'http://localhost:8080/graphql',
  {
    headers: requestHeaders
  }
);

export default graphqlRequestClient;
