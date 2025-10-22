import React from 'react'
import Hero from '../components/about/Hero'
import OverviewComponent from '../components/about/OverviewComponent'
import HowWeGetItDone from '../components/about/HowWeGetItDone'
import Application from '../components/about/Application'

function AboutUs() {
  return (
    <div className=''>
      <Hero />
      <HowWeGetItDone />
      <Application/>
      <OverviewComponent/>
    </div>
  )
}

export default AboutUs