import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Card from '@/app/components/projectCard'
import { getAllProjects, getAllPosts } from '../server/getAllPosts'
import { apolloClient } from '../lib/graphql-client'
import { gql } from '@apollo/client'

const ProjectComponent = () => {
  const [cards, setCards] = useState<any>(null)
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
                tech
                name
              }
            }
          }
        `
      })
      .then(data => {
        setCards(data.data.projectCollection.items)
        console.log(data.data.projectCollection)
      })
  }, [])

  return (
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
            description={card.description}
            imgSrc={card.featureImage.url}
            href=''
            imgAlt='porsche'
            title={card.name}
            tech={card.tech}
          />
        </React.Fragment>
      ))}
    </Flex>
  )
}

export default ProjectComponent
