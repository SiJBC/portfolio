'use client'
import { Box, Flex, Text, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState, Suspense } from 'react'
import Card from '@/app/components/projectCard'
import { apolloClient } from '../lib/graphql-client'
import { gql } from '@apollo/client'

const ProjectComponent = () => {
  const [cards, setCards] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    apolloClient
      .query({
        query: gql`
          query {
            projectCollection {
              items {
                description
                featureImage {
                  url
                }
                year
                tech
                name
                link
              }
            }
          }
        `
      })
      .then(data => {
        setLoading(false)
        setCards(data.data.projectCollection.items)
      })
  }, [])

  return (
    <>
      {loading && (
        <Flex justifyContent={'center'}>
          <Spinner
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Flex>
      )}
      {!loading && (
        <Flex
          width={['100%', '75%']}
          flexDirection='column'
          justifyContent='center'
          padding='6'
          paddingInline={['6', '6', '24']}
          boxShadow={['none', 'none', 'lg']}
          margin={['0', '0', 'auto']}
          bg='white'
          gap='10px'
        >
          <Text
            fontSize='2xl'
            textAlign={['center', 'center', 'left']}
            fontWeight='semibold'
          >
            Latest Work
          </Text>
          {cards?.map((card: any, i: number) => (
            <React.Fragment key={`card = ${i}`}>
              <Card
                year={card.year}
                description={card.description}
                imgSrc={card.featureImage.url}
                link={card.link}
                href=''
                imgAlt='porsche'
                title={card.name}
                tech={card.tech}
              />
            </React.Fragment>
          ))}
        </Flex>
      )}
    </>
  )
}

export default ProjectComponent
