'use client'
import React from 'react';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

function SchoolDiv() {

    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    const handleMouseEnter = () => {
        setIsHovered(true);
        controls.start({ rotateY: 360 });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        controls.start({ rotateY: 0 });
    };

    return (  
        <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} animate={controls} className='w-5/6 h-5/6 bg-yellow rounded-md shadow-md'>
            {isHovered ? (
                <div className='flex justify-evenly items-center h-full w-full bg-baby-blue rounded-md'>

                    <Image src={'/escom.png'} width={180} height={0}></Image>
                    <Image src={'/UPM.jpg'} width={200} height={0} className='rounded-md'></Image>


                    
                    
                </div>
            ) : (
                <div className='flex justify-center items-center h-full w-full'>
                    <p className='font-name text-8xl'>EDUCACIÓN</p>
                </div>
            )}
        </motion.div>
    );
}

export default SchoolDiv;