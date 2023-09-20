"use client"

import React from "react";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal'
import Navigation from "./Navigation";




function Card() {

    //state to store data
    const [apiData, setData] = useState(null);

    //state to show more info about the employee
    const [employeeID, setEmployeeID] = useState(null);

    //state to control the onClick, only one at a time until you close the window, you can check out another employee
    const[allowOnClick, setAllowOnClick] = useState(true);

    //state used to only show the modal of the selected card
    const[showModal, setShowModal] = useState(false);

    

     //function to set the employee ID to the state to show more info of them
     const setEmployeeIDtoShowInfo = (employee) => {
        if(allowOnClick){
            setEmployeeID(employee);
            setAllowOnClick(false);
            setShowModal(true);
        }
    };
    

    //function to get the data
    const getDataFromAPI = async () => {
        const awaitingResponse = await fetch('https://gyl716q9ce.execute-api.us-east-1.amazonaws.com/dev/prueba');
        const employeeData = await awaitingResponse.json();
        setData(employeeData); //this store the datat in the state
    };
   

    //it calls the 'getDataFromAPI' when the component its firstly mount
    useEffect(() => {
        getDataFromAPI();
      }, []);


    //this return puts each card inside a div using the map function
    return ( 
        //if there´s data inside apiData, then it uses the map function
        
        <AnimatePresence>
            {apiData && (
                <motion.div className="absolute flex flex-col bg-white w-screen h-screen onset-0 items-center">
                    <motion.div>
                        <Navigation />
                    </motion.div>
                    <motion.div className="flex flex-row onset-0 h-full w-full justify-evenly items-center">
                        {
                            apiData.map((employee) => (
                                <>
                                <motion.div key={employee.Apellido+employee.Name} whileHover={{ scale: 1.2 }} layoutId={employee.Nombre} className="flex flex-col w-72 h-56 justify-center items-center bg-blue-fromi rounded-md  shadow-lg hover:bg-slate-300 cursor-pointer"
                                    onClick={() => setEmployeeIDtoShowInfo(employee)}>
                                    <Image src={employee.Imagen} alt={`Imagen`} width={90} height={95} className="rounded-lg m-3" />
                                    <motion.h1 className="text-white font-bold font">{employee.Nombre}</motion.h1>
                                    <motion.h1 className="text-white font-bold font">{employee.Apellido}</motion.h1>
                                    
                                </motion.div>
                                {/* Condition to ensure that only the one clicked is shown */}
                                {showModal && employeeID === employee && (
                                    <Modal
                                        setShowModal={setShowModal}
                                        showModal={setShowModal}
                                        employeeID={employee}
                                        setEmployeeID={setEmployeeID}
                                        setAllowOnClick={setAllowOnClick}
                                        allowOnClick={allowOnClick}
                                    />
                                )}
                                
                                </>
                                
                            ))}
                        </motion.div>           
                </motion.div>  
            )}
        </AnimatePresence>
     ); //return closing parenthesis
}

export default Card;