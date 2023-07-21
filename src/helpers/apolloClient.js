import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://grateful-ibex-66.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "jQQF31hWJQei4DUOHQzF1IC88fjJCKMxbBo2oOliNr0xTjAS0Kd92ELQ2iYsxxMM",
  },
});
