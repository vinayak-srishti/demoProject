import React from 'react'
import Banner from '../Banner.jsx/Banner'
import Services from '../Services/Services'
import AboutUs from '../AboutUs/AboutUs'
import UserNavbar from '../UserNavbar/UserNavbar'

function Home() {
  return (
    <div>
        <UserNavbar/>
        <Banner/>
        <Services/>
        {/* <AboutUs/> */}
    </div>
  )
}

export default Home