'use client'
import Header from './components/header'
import Projects from './components/projectComponent'
import Footer from './components/footer'
import { Suspense } from 'react'
import { Spinner } from '@chakra-ui/react'

export default async function Home () {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <div style={{ height: '100vh' }}>
            <h1>Loading</h1>
            <Spinner
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </div>
        }
      >
        <Projects />
      </Suspense>
      <Footer />
    </div>
  )
}
