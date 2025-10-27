import Hero from '../components/home/Hero'
import PartnershipComponent from '../components/home/PartnershipDetails';
import PartnershipShowcase from '../components/home/PartnershipComponent';
import LatestNews from '../components/home/LatestNews';
// import SocialUpdatesSimple from '../components/home/SocialUpdatesSimple';
import ProductShowcase from '../components/home/ProductShowcase';

function Home() {
  return (
    <div className='overflow-hidden'> 
      <Hero />
      <ProductShowcase/>
      <PartnershipShowcase/>
      <PartnershipComponent/>
      <LatestNews/>
      {/* <SocialUpdatesSimple/> */}
    </div>
  );
}

export default Home