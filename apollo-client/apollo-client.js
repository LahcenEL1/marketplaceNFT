import { ApolloClient, InMemoryCache, gql ,HttpLink} from "@apollo/client";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;
const GRAPHQL_LINK_URI = "https://api.thegraph.com/subgraphs/name/sayedex/herochain";
let CLIENT;

export function getApolloClient(forceNew) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      uri: "https://api.thegraph.com/subgraphs/name/sayedex/herochain",
      cache: new InMemoryCache().restore(windowApolloState || {}),

  
      
      /**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
    });
  }

  return CLIENT;
}


