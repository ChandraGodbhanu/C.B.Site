import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobalContext } from '../context'
import Contact from './Contact';


function Home() {
  
  const {updateHomePage} = useGlobalContext();
  useEffect(() =>{
    updateHomePage();
  },[])
  return (
    <div>
    <HeroSection />
    <Contact/>
    </div>
  )
}

export default Home