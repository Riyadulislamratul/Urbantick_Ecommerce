import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import StorySection from '../components/StorySection'
import Categories from '../components/Categories'
import NewLaunches from '../components/NewLaunches'

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <StorySection />
      <Categories />
      <NewLaunches />
    </>

  )
}

export default HomePage