'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { getAllWPPosts } from '../server/getAllPosts'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Posts from '@/app/components/postCard'
import 'swiper/css'

export default function PostComponent () {
  const [posts, setPosts] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    getAllWPPosts().then(res => {
      setPosts(res.data.posts.edges.map((el: any) => el.node))
      // a promise that takes 2 seconds to resolve
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo')
        }, 2000)
      })
      promise.then(() => {
        setLoading(false)
      })
    })
  }, [])

  return (
    <>
      {!loading && (
        <Box
          width={['100%', '75%']}
          padding='6'
          paddingInline={['6', '6', '24']}
          margin={['0', '0', 'auto']}
          bg='white'
          boxShadow={['none', 'none', 'lg']}
          gap='10px'
        >
          <Text
            fontSize='2xl'
            textAlign={['center', 'center', 'left']}
            fontWeight='semibold'
          >
            Recent Posts
          </Text>
          <Swiper
            spaceBetween={5}
            slidesPerView={3.3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {posts &&
              posts.map((post: any, i: number) => (
                <React.Fragment key={`post- ${i}`}>
                  <SwiperSlide>
                    <Posts
                      title={post.title}
                      description={post.excerpt}
                      href={`https://simoncolman.com/$`}
                    ></Posts>
                  </SwiperSlide>
                </React.Fragment>
              ))}
          </Swiper>
        </Box>
      )}
    </>
  )
}
