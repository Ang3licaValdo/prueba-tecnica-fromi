'use client'
import React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { motion} from 'framer-motion';
import School from '../components/School'
import Abilities from '../components/Abilities';
import Courses from '../components/Courses';

function AboutMe() {
    const [changeContent, setChangeContent] = useState(true);

    const handleOnClick = () => {
        if(changeContent){
            setChangeContent(false);
        }
        else{
            setChangeContent(true);
        }    
    };

    return ( 
        
        <motion.div className='absolute flex flex-col bg-white w-screen h-screen onset-0 items-center'>
            <Navigation/>
            
            <motion.div className='h-full w-full bg-white '>
                {changeContent ? (
                    <div className='w-full h-full bg-white flex justify-center items-center'>
                        <div className=''>
                            <Image className='rounded-lg shadow-2xl' src={'/me.jpeg'} width={230} height={0} alt='me'/>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-name text-9xl p-6'>Angélica Valdovinos</h1>
                            <p className='font-body p-1'>Ingeniería en Sistemas Computacionales</p>
                            <div className='flex'>
                                <button className='bg-yellow w-36 m-5 rounded-md shadow-md h-7' onClick={() => handleOnClick()}>Ver más</button>
                                <Link href='../' className='font-body'>
                                    <button className='bg-yellow w-36 m-5 rounded-md shadow-md h-7' onClick={() => handleOnClick()}>Prueba</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                ) : (
                    <>
                    <div className='flex w-screen justify-end'>
                        <button className='mr-3 mt-2 bg-yellow rounded-md p-1 font-body' onClick={() => handleOnClick()}>Regresar</button>
                    </div>
                    <div className='flex w-full h-full justify-center items-center'>
                        
                        <Abilities/>
                        <div className='flex flex-col w-1/2 h-full'>
                            <div className='h-1/2 flex flex-col justify-center items-center rounded-md '>
                                <School/>
                            </div>
                            
                            <div className='h-1/2 flex justify-center items-center'>
                                <Courses/>
                            </div>

                        </div>

                    </div>
                    </>
                )}
                <Footer/>

            </motion.div>

        </motion.div>
     )
}

export default AboutMe;
