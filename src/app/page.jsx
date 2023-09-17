'use client'
import React from 'react';
import Card from './components/Card'
import Navigation from  "./components/Navigation"
import Footer from './components/Footer'
import { motion} from 'framer-motion';
import Button from './components/Button'
import { BsFillArrowRightCircleFill} from 'react-icons/bs'


function IndexPage(){
  return(
    <motion.div className="absolute flex flex-col bg-white w-screen h-screen onset-0 items-center">
          <Navigation/>
          <Card/>
          <Button string={'Portafolio Personal'} icon={<BsFillArrowRightCircleFill/>} link={'../about'}/>
          <Footer/>        
    </motion.div> 
    
  )
}

export default IndexPage