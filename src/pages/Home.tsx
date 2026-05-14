import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import Offer from '../components/Offer';
import MapSection from '../components/MapSection';
import Neighborhood from '../components/Neighborhood';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Process />
      <Offer />
      <MapSection />
      {/* <Neighborhood /> */}
    </>
  );
}
