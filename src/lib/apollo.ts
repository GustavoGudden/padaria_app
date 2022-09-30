import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8g2n727454a01uedx12diol/master",
  cache: new InMemoryCache(),
});
