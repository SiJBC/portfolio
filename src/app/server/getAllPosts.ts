"use server"
import { gql } from "@apollo/client"
import { apolloClient, apolloClientWordpress } from "../lib/graphql-client"

export async function getAllWPPosts() {
  "use server"

  const res = await apolloClientWordpress.query({
    query: gql`
      query NewQuery {
        posts {
          edges {
            node {
              id
              title
              excerpt
              slug
            }
          }
        }
      }
    `,
  })
  return res
}

export async function getAllProjects() {
  "use server"
  return await apolloClient.query({
    query: gql`
      query {
        projectCollection {
          items {
            description
            featureImage {
              url
            }
            tech
            name
          }
        }
      }
    `,
  })
}
