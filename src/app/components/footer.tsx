import React from 'react'
import { Flex, Image, Link } from '@chakra-ui/react'

function footer () {
  return (
    <Flex justifyContent='center' gap='10' marginY={['6', '6', '12']}>
      <Link>
        <Image
          boxSize='50px'
          objectFit='cover'
          src='/facebook.svg'
          alt='Facebook'
        />
      </Link>
      <Link>
        <Image
          boxSize='50px'
          objectFit='cover'
          src='/linkedin.svg'
          alt='Facebook'
        />
      </Link>
      <Image
        boxSize='50px'
        objectFit='cover'
        src='/github.svg'
        alt='Facebook'
      />
    </Flex>
  )
}

export default footer
