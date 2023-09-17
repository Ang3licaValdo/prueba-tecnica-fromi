import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Link from 'next/link'

function Footer() {
    return ( 
        <div className="flex w-screen flex-col bg-blue-fromi justify-center items-center p-1">
            <div className='flex'>
                <Link href="https://github.com/Ang3licaValdo" target='_blank'>
                    <AiFillGithub style={{ color: 'white' }} size={25}/>
                </Link>
                <Link href="https://www.linkedin.com/in/angelicavaldovinos/" target='_blank'>
                    <AiFillLinkedin style={{ color: 'white' }} size={25}/>
                </Link>    
            </div>
            <h1 className="font-footer text-white">Creado por Angelica Valdovinos &#169;</h1>
        </div>
     );
}

export default Footer;