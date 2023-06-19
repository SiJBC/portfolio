// import './globals.css'
// import { Inter } from 'next/font/google'
// import { graphqlClient } from './lib/graphql-client'
// import { GetAllPosts } from '../../queries'

// const inter = Inter({ subsets: ['latin'] })

// export default async function RootLayout ({
//   children
// }: {
//   children: React.ReactNode
// }) {
//   const { posts } = await graphqlClient.request(GetAllPosts)
//   console.log(posts?.edges.map(({ node }) => node.title))
//   return (
//     <html lang='en'>
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { useEffect } from 'react'
import { gql } from '@apollo/client'
import { apolloClient } from './lib/graphql-client'
import { getAllPosts } from './server/getAllPosts'

const inter = Inter({ subsets: ['latin'] })

const query = `query{
  pageBlogPost(id:"KaA7yfli9UsX38W5YB8PI"){
    title
  }
}`

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
