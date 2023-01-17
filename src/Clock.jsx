import React, { useState , useEffect } from "react";

export default function Clock() {

    const initialData = {
        fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
    }
    const [data, setData] = useState(initialData)
    
    const thick = () => {
        setData((prev)=>{
            let edad = prev.edad + 1;
            return {
                ...prev,
                fecha: new Date(),
                edad
            }

        })
    };

    useEffect(() => {
         const timerId = setInterval(()=> thick(),1000)

      return () => {
        clearInterval(timerId);
      }
    })
    


    return (
        <div>
        <h2>
        Hora Actual:
        {data.fecha.toLocaleTimeString()}
        </h2>
        <h3>{data.nombre} {data.apellidos}</h3>
        <h1>Edad: {data.edad}</h1>
        </div>
     )
    
};


