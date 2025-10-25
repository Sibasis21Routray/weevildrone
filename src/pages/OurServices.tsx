import Hero from '../components/services/Hero'
import { LandMappingServices } from '../components/services/LandMappingServices';
// import { ServiceStats } from '../components/services/ServiceStats'
import { TrainingServices } from '../components/services/TrainingServices';

function OurServices() {
  return (
    <div className='overflow-hidden '>
      <Hero />
      {/* <ServiceStats /> */}
      <TrainingServices />
      <LandMappingServices />
    </div>
  );
}

export default OurServices