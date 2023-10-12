import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Pricing from '../components/Pricing';
import Working from '../components/Working';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECT" text="some of my most recent works"/>
      <Working/>
      <Pricing/>
      <Footer/>
      
    </div>
  )
}

export default Project
