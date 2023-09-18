import React from 'react';
import { motion} from 'framer-motion';
import Link from 'next/link'


function Button({string, icon, link}) {
    const buttonContents = {
        initial: {
          opacity: 1,
          scale: 1,
        },
        hover: {
          opacity: 1,
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        },
      };

      const buttonContentVariants = {
        initial: {
          opacity: 0,
        },
        hover: {
          opacity: 1,
        },
      };
    return ( 
        <motion.div className='flex w-screen justify-end'>
            <Link href={link}>
                <motion.button
                    variants={buttonContents}
                    initial='initial'
                    whileHover='hover'
                    whileTap='hover'
                    className='rounded-md bg-blue-fromi w-42 mr-6 mb-6 p-4 font-footer text-white text-center'>
                    <motion.div variants={buttonContents} className='flex'>
                        {string}
                        <motion.div variants={buttonContentVariants} className='flex pl-2 pt-1'>
                            {icon}
                        </motion.div>
                    </motion.div>
                </motion.button>
            </Link>
        </motion.div>
     );
}

export default Button;