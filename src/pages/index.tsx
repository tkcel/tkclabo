import React from 'react'
/* components */
import DefaultLayout from '../components/templates/defaultLayout'
import Hero from '../components/molecules/hero'
import PostLink from '../components/molecules/post-link'

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <PostLink />
      <PostLink />
      <PostLink />
      <PostLink />
    </DefaultLayout>
  )
}

export default Home
