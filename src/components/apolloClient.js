import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
  });