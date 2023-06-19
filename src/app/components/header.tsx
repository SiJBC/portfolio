'use client'
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'

const header = () => {
  return (
    <Flex
      width={['100%', '75%']}
      flexDirection={['column', 'column', 'row-reverse']}
      justifyContent='center'
      // gap='10'
      padding='6'
      paddingInline={['6', '6', '24']}
      margin={['0', '0', 'auto']}
      bg='white'
    >
      <Image
        margin='auto'
        borderRadius='full'
        boxSize={['150px', '150px', '200px']}
        src='/simon_portrait.jpg'
        alt='Simon Colman'
      />
      <Box marginInline='auto' marginTop={['6', '6', '12']}>
        <Text
          textAlign={['center', 'center', 'left']}
          fontSize='2xl'
          fontWeight='bold'
        >
          Hi, I am Simon, <br></br> Full-Stack Developer.
        </Text>
        <Text
          marginTop={['6', '6', '12']}
          width={['100%', '100%', '90%']}
          textAlign={['center', 'center', 'left']}
          fontSize='l'
        >
          I&apos;m a full-stack developer with a passion for building
          responsive, functional and accessible user interfaces. I&apos;m
          currently working at
          <Text as='span' fontWeight='semibold'>
            {' '}
            Tribal DDB
          </Text>
        </Text>
        <Box
          display='flex'
          justifyContent={['center', 'center', 'left']}
          width='100%'
        >
          <Button
            margin='auto'
            marginInline={['auto', 'auto', '0']}
            marginTop='6'
            colorScheme='cyan'
            color='white'
            variant='solid'
            size='sm'
          >
            Download Resume
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default header
