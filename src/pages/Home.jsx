import React from 'react'
import HeroSlider from '../components/Hero'
import ProductCategories from '../components/Product'
import WhyChooseUs from '../components/Whyus'
import Gallery from '../components/Gallery'
import MissionVision from '../components/Mission'

const Home = () => {
  return (
    <div>
        <HeroSlider />
        <ProductCategories  />
        <MissionVision />
        <Gallery />
        <WhyChooseUs    />
    </div>
  )
}

export default Home