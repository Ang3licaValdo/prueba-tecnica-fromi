import React from "react";
import Image from 'next/image';
import { motion} from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';

function Modal({setShowModal, employeeID, setEmployeeID, setAllowOnClick, allowOnClick}) {
    //this function sets the employee to null so we stop seeing the specific detailes information of one employee
    const setToNull = () => {
        if(!allowOnClick){
            setEmployeeID(null);
            setAllowOnClick(true);
            setShowModal(false);
        }
    }
    return ( 
        
            <motion.div className="flex absolute inset-0  bg-opacity-50 bg-slate-800 justify-center items-center">
                <motion.div layoutId={employeeID.Nombre} className="flex flex-col bg-slate-300  h-3/4 w-2/4 rounded-md justify-center items-center">
                    
                        <motion.div className="flex w-full justify-end mr-10">
                            <motion.button className="" onClick={() => setToNull()}>
                                <RxCross2 size={30}/>
                            </motion.button>
                        </motion.div>
                        <motion.div className="flex">
                            <motion.div className="flex flex-row mr-9">
                                <Image src={employeeID.Imagen} alt={`Imagen`} width={250} height={50} className="rounded-lg m-3 shadow-lg" />
                            </motion.div>
                            <motion.div className="flex flex-col justify-center items-center w-52">
                                <motion.h5 className="text-black font-bold font-bold-title text-xl text-center">{employeeID.Nombre} {employeeID.Apellido}</motion.h5>   
                                <motion.h5 className="text-black font-body text-center">{employeeID.Correo}</motion.h5>    
                                <motion.h5 className="text-black font-body text-center">{employeeID.Telefono}</motion.h5>   
                                <motion.h5 className="text-black font-body text-justify">{employeeID.Direccion}</motion.h5>
                                
                            </motion.div> 
                        </motion.div>
                </motion.div>
            </motion.div>
        
     );
}

export default Modal;