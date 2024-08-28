import React from 'react'
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
    </div>
  )
}

export default Home
