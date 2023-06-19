import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Posts from '@/app/components/postCard'

export default function postComponent () {
  return (
    <Box display='flex' flexDirection='column' backgroundColor='gray.100'>
      <Box
        width={['100%', '75%']}
        flexDirection={['column', 'column', 'row-reverse']}
        justifyContent='center'
        padding='6'
        paddingInline={['6', '6', '24']}
        margin={['0', '0', 'auto']}
      >
        <Text
          fontSize='2xl'
          textAlign={['center', 'center', 'left']}
          fontWeight='semibold'
        >
          Recent Posts
        </Text>
        <Flex
          flexDirection={['column', 'column', 'row']}
          justifyContent='center'
          gap='10px'
          paddingY='6'
        >
          <Posts
            title='Coffee Finder'
            description='A simple app for finding coffee'
          ></Posts>
          <Posts
            title='Coffee Finder'
            description='A simple app for finding coffee'
          ></Posts>
        </Flex>
      </Box>
    </Box>
  )
}
