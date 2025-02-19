import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            },10)
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    },[isRunning]);

    const formtTime = (ms) => {
        const hours = Math.floor(ms / 3600000);
        const minutes = Math.floor((ms % 3600000) / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);

        return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
    }
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px"}}>
        <h1 style={{ cursor: "pointer", fontSize: "24px"}}
             onClick={() => setIsRunning(!isRunning)}
        >
            {formtTime(time)}
        </h1>
        <button 
        onClick={() => setIsRunning(!isRunning)} 
        style={{ marginRight: "10px", padding: "8px 12px", fontSize: "16px", cursor: "pointer" }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
        <button 
           onClick={() => {setTime(0), setIsRunning(false)}}
           style={{ padding: "8px 12px", fontSize: "16px", cursor: "pointer" }}
        >
            Reset
        </button>
    </div>
  )
}

export default Stopwatch