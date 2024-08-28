import React from 'react'
import ScrollToTop from '../components/ScroolToTop'
import PreLoader from '../components/PreLoader/PreLoader'


const RootLayout = () => {



  return (
    <div>
      <ScrollToTop />
      <PreLoader />
      {/*
      PreLoader Loads when Refreshed
      PreLoader contains 
      Header
      Outlet
      Footer
       */}
    </div>
  )
}

export default RootLayout