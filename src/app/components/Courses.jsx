'use client'
import React from 'react';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

function Courses() {
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
        <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} animate={controls} className='w-5/6 h-5/6 bg-baby-green rounded-md shadow-md'>
            {isHovered ? (
                <div className='flex justify-evenly items-center h-full w-full bg-baby-blue rounded-md'>
                    <ul className='font-body'>
                        <li className='bg-emerald-300'>Google Cloud Platform</li>
                        <li className='bg-red-400'>C/C++</li>
                        <li className='bg-rose-300'>Introducción al Front End</li>
                        <li className='bg-indigo-400'>Foundations: Data, Data, Everywhere</li>
                    </ul>
 
                </div>
            ) : (
                <div className='flex justify-center items-center h-full w-full'>
                    <p className='font-name text-8xl'>CURSOS</p>
                </div>
            )}
        </motion.div>
    );
}

export default Courses;