import React from 'react'
import Counter_Ui from '../components/Counter/Counter_Ui'

import Introduction from '../components/introduction/Introduction'
// import CardList from '../components/CardList/CarrdList'

import GridGallery_1 from '../components/Gallery_grid/Grid_Gallery_1'
import GridGallery_2 from '../components/Gallery_grid/Grid_Gallery_2'
import Slider from '../components/HomeSlider/Slider'
import ChairWomenMessage from '../components/introduction/ChairWomenMessage'
import WhyChooseUs from '../components/WhyChooseUs'
import FAQ from '../components/FAQ/FAQ'








const Homepage = () => {

  return (
    <div className='space-y-20 lg:space-y-28'>
      <Slider />
      <GridGallery_1 />
      <Introduction />
      <ChairWomenMessage />
      <Counter_Ui />
      <GridGallery_2 />
      <WhyChooseUs />
      <FAQ />
    </div >
  )
}

export default Homepage