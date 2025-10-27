
import Hero from '../components/about/Hero'
import OverviewComponent from '../components/about/OverviewComponent'
import HowWeGetItDone from '../components/about/HowWeGetItDone'
import Application from '../components/about/Application'

function AboutUs() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <HowWeGetItDone />
      <Application/>
      <OverviewComponent/>
    </div>
  )
}

export default AboutUs