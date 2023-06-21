'use client'
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

import React, { useState } from 'react'

type CardProps = {
  title: string
  description: string
  href?: string
}

const PostCard: React.FC<CardProps> = ({ title, description, href }) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <Card
      onClick={() => window.open(href ?? '')}
      _hover={{
        cursor: 'pointer',
        opacity: '0.75',
        transform: 'scale(1.01)',
        bgColor: 'gray.300'
      }}
      backgroundColor={'gray.100'}
      height={'250px'}
    >
      <CardHeader>
        <Heading size='md'> {title}</Heading>
      </CardHeader>
      <CardBody>
        <div
          dangerouslySetInnerHTML={{ __html: description.slice(0, 50) }}
        ></div>
      </CardBody>
      <CardFooter>
        <Button bgColor={'white'}>View here</Button>
      </CardFooter>
    </Card>
  )
}

export default PostCard
