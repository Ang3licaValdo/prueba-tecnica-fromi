"use client"

import React from "react";
import { useState, useEffect } from 'react';



function Card() {
    //state to store data
    const [apiData, setData] = useState(null);

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
        <div>
            {apiData && (
                <div>
                    {
                        apiData.map((employee) => {
                            <div key={employee.Telefono}>
                                <img src="{employee.Imagen}" alt="" />
                                <h1>{employee.Nombre}</h1>
                                <h1>{employee.Apellido}</h1>
                            </div>
                        })
                    }
                </div>
            )}
        </div>

     );
}

export default Card;