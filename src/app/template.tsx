// import { GetAllPosts } from '../../queries'
// import Menu from './components/menu'
// import { graphqlClient } from './lib/graphql-client'

export default async function Template ({
  children
}: {
  children: React.ReactNode
}) {
  //   const { posts } = await graphqlClient.request(GetAllPosts)
  //   console.log(posts?.edges.map(({ node }) => node.title))
  return <>{children}</>
}
