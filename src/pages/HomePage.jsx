import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import StorySection from '../components/StorySection'
import Categories from '../components/Categories'

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <StorySection />
      <Categories />
    </>

  )
}

export default HomePage