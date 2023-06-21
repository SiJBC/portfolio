'use client'
import React from 'react'
import { Flex, Image, Link } from '@chakra-ui/react'

function footer () {
  return (
    <Flex justifyContent='center' gap='10' marginY={['6', '6', '12']}>
      <Link href='https://www.facebook.com/SimonColman7777777777/'>
        <Image
          boxSize='50px'
          objectFit='cover'
          src='/facebook.svg'
          alt='Facebook'
        />
      </Link>
      <Link href='https://www.linkedin.com/in/simon-colman-628344109/'>
        <Image
          boxSize='50px'
          objectFit='cover'
          src='/linkedin.svg'
          alt='linkedin'
        />
      </Link>
      <Link href="href='https://github.com/SiJBC'">
        <Image
          boxSize='50px'
          objectFit='cover'
          src='/github.svg'
          alt='Facebook'
        />
      </Link>
    </Flex>
  )
}

export default footer
