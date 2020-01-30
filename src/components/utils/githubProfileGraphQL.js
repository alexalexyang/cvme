import { gql } from "apollo-boost";
import { client } from "../apolloClient";

export const userQuery = gql`
  query($login: String!) {
    user(login: $login) {
      avatarUrl
      name
      location
      email
      url
      websiteUrl
      bio
      pinnedItems(first: 4) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              homepageUrl
            }
          }
        }
      }
    }
  }
`;

export const getGitHubProfile = (userLogin, setUser) =>
  client
    .query({ query: userQuery, variables: { login: userLogin } })
    .then(response => setUser(response.data.user))
    .catch(err => console.log(err));
