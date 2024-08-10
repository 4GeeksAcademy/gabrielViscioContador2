import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faClock } from '@fortawesome/free-solid-svg-icons'; 

const SecondsCounter = () => {
    const [segundos, setSegundos] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let intervalId;

        if (!isPaused) {
            intervalId = setInterval(() => {
                setSegundos((prevSegundos) => prevSegundos + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isPaused]);

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const formattedSeconds = String(segundos).padStart(6, '0');

    let buttonText;
    if (isPaused) {
        buttonText = "Reanudar";
    } else {
        buttonText = "Pausar";
    }

    return (
        <div className='container-fluid' style={{ textAlign: 'center', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <h1 style={{marginBottom:'3rem',backgroundColor:'black', color:'white',}}>Seconds Counter</h1>
            
            <h2 style={{
                backgroundColor: 'black',
                color: 'white',
                width: '25rem',
                letterSpacing: '0.5rem',
                fontSize: '3rem',
                margin: 'auto',
            }}>
               <FontAwesomeIcon style={{marginRight:'2rem',}} icon={faClock} /> 
               {formattedSeconds}
            </h2>
            <button style={{margin:'auto', marginTop:'2rem', width:'7rem', }} type="button" class="btn btn-dark" onClick={handlePauseResume}>
                {buttonText}
            </button>
        </div>
    );
};

export default SecondsCounter;
