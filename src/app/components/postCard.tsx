import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Box,
  Button
} from '@chakra-ui/react'

import React from 'react'

type CardProps = {
  title: string
  description: string
  href?: string
}

const postCard: React.FC<CardProps> = ({ title, description, href }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'> {title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  )
}

export default postCard
