import { Link } from '@chakra-ui/next-js'
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  List,
  ListItem
} from '@chakra-ui/react'
import React from 'react'

type CardProps = {
  imgSrc: string
  imgAlt: string
  title: string
  description: string
  href: string
  tech?: Array<string>
}

const projectCard: React.FC<CardProps> = ({
  imgSrc,
  imgAlt,
  tech,
  title,
  description,
  href
}) => {
  console.log(title)
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        aspectRatio='revert'
        objectFit='cover'
        width={['100%', '100%', '340px']}
        src={imgSrc}
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>
          <Flex paddingY='2' gap='2'>
            <Badge
              colorScheme='cyan'
              color='grey'
              borderRadius='25px'
              lineHeight='2'
              paddingInline='2'
            >
              2023
            </Badge>
            <Text color='grey' fontWeight='semibold'>
              {' '}
              Front End
            </Text>
          </Flex>
          <Text py='2'>{description}</Text>
          <Box>
            <List display='flex' gap='2'>
              {tech?.map((el, i) => (
                <ListItem fontWeight='semibold' key={`tech-${i}`}>
                  {el}
                </ListItem>
              ))}
            </List>
          </Box>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default projectCard
