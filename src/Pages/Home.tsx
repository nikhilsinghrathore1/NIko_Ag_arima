import React from 'react'
import FifthPage from '../components/FifthPage'
import Footer from '../components/Footer'
import Fourth from '../components/Fourth'
import Hero from '../components/Hero'
import SecondPage from '../components/SecondPage'
import ThirdPage from '../components/ThirdPage'

const Home = () => {
  return (
    <div className='bg-[#FFFFFF]'>
    <Hero/>
    <SecondPage/>
    <ThirdPage/>
    <Fourth/>
    <FifthPage/>
    <Footer/>
    </div>
  )
}

export default Home
