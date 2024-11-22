import { useEffect } from 'react';
import FifthPage from '../components/FifthPage';
import Footer from '../components/Footer';
import Fourth from '../components/Fourth';
import Hero from '../components/Hero';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';
import LocomotiveScroll from 'locomotive-scroll';


const Home = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    locomotiveScroll
  }, [])
  

  return (
    <div className='bg-[#FFFFFF]'>
      <Hero />
      <SecondPage />
      <ThirdPage />
      <Fourth />
      <FifthPage />
      <Footer />
    </div>
  );
};

export default Home;



// system design is like a roadmap ki what you have to do so you don't have to think while doing
