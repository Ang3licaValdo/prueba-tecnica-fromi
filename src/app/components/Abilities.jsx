'use client'
import React from 'react';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Abilities() {


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

        <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} animate={controls} className='flex h-5/6 w-1/2 bg-lilac m-6 rounded-md shadow-md justify-center items-center'>
            {isHovered ? (
                <div className='flex flex-col justify-center items-center h-full w-full bg-baby-blue rounded-md'>
                    <div className='flex flex-col justify-center items-center'>
                                        
                        <div className='flex'>
                            <div className='flex flex-col rounded-md justify-center p-2 items-center w-44 h-44 bg-slate-50 m-1 font-footer'>
                                <h1 className='font-bold-titles text-xl'>Java</h1>
                                <p className='text-justify'>Programación Orientada a Objetos.</p>
                            </div>
                        <div className='flex flex-col rounded-md justify-center items-center p-2 w-44 h-44 bg-slate-50 m-1 font-footer'>
                            <h1 className='font-bold-titles text-xl'>Python</h1>
                            <p className='text-justify'>Programación orientada a objetos y aprendizaje automático.</p>
                        </div>
                        <div className='flex flex-col rounded-md justify-center items-center p-2 w-44 h-44 bg-slate-50 m-1 font-footer'>
                            <h1 className='font-bold-titles text-xl'>C/C++</h1>
                            <p className='text-justify'>Conocimiento en algunas estructuras básicas de programación como algoritmos de ordenamiento, listas, pilas y colas.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='flex flex-col rounded-md justify-center items-center p-2 w-44 h-44 bg-slate-50 m-1 font-footer'>
                            <h1 className='font-bold-titles text-xl'>CSS, HTML y JS</h1>
                            <p className='text-justify'>Para desarrollo de páginas dinámicas usando CSS y HTML, utilizando Java Script para detalles básicos.</p>
                        </div>
                        <div className='flex flex-col rounded-md justify-center items-center p-2 w-44 h-44 bg-slate-50 m-1 font-footer'>
                            <h1 className='font-bold-titles text-xl'>Contenedores</h1>
                            <p className='text-justify'>Ejecución de scripts de Python usando contenedores de Docker.</p>
                        </div>
                    </div>
                </div>

            </div>
        ) : (
        <div>
            <p className='font-name text-8xl'>HABILIDADES</p>
        </div>
        )}

    </motion.div>
     );
}

export default Abilities;