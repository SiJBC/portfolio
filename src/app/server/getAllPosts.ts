"use server"
import { gql } from "@apollo/client"
import { apolloClient } from "../lib/graphql-client"

export async function getAllPosts() {
  "use server"

  const res = await apolloClient.query({
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
