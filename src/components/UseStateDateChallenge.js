import React, { useState } from "react";
import "../App.css";

const UseStateDateChallenge =()=>{
    let Systime = new Date().toLocaleTimeString();
    const[time, updateDate] = useState(Systime);
    const handleButton =()=>{
        let Systime = new Date().toLocaleTimeString();
        updateDate(Systime);
    }
    setInterval(handleButton, 1000)
    return(
        <>
        <div className="heading">
            <h1>{time}</h1>
            {/* <button className="button" onClick={handleButton}>Get Time</button> */}
        </div>
        </>
    )
}
 
export default UseStateDateChallenge