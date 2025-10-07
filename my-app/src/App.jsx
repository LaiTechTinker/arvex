import React from 'react'

import './App.css'
import HeroSection from './component/Hero'
import FeaturesSection from './component/Extension'
import WhyChoose from './component/Reasons'
import Footer from './component/Footer'
import AboutArvadex from './component/Autoscroll'

function App() {


  return (
     <div className="root-container">
      <div className="content-container">
    <HeroSection/>
    <FeaturesSection/>
    <AboutArvadex/>
    <WhyChoose/>
    <Footer/>
      </div>
    </div>
    
  )
}

export default App
