import { GraphQLClient } from 'graphql-request';
import { QueryClient } from 'react-query';

import { getSdk } from '../src/generated/graphql';

const gqlClient = new GraphQLClient(
  'https://rad-cactus-fa0a13.netlify.app/api/graphql'
);
export const { getDogs, dogByName } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
