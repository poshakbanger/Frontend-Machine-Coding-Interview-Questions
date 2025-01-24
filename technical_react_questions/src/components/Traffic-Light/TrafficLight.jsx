import React, { useEffect, useState } from 'react'

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("red");

    useEffect(() => {
        // Function to determine the next light and its duration
    const getNextLight = (currentLight) => {
        switch (currentLight) {
          case "red":
            return { nextLight: "green", duration: 3000 };
          case "green":
            return { nextLight: "yellow", duration: 500 };
          case "yellow":
            return { nextLight: "red", duration: 4000 };
          default:
            return { nextLight: "red", duration: 4000 };
        }
    };

    const { nextLight, duration } = getNextLight(activeLight);
    const timer = setTimeout(() =>{
        setActiveLight(nextLight);
    }, duration);

        // Cleanup timeout when component unmounts or state changes
        return () => clearTimeout(timer);
    }, [activeLight]);
    
  return (
    <div style={{ textAlign:"center", marginTop: "50px" }}>
         <div
        style={{
          width: "100px",
          height: "300px",
          background: "#000",
          margin: "0 auto",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {/* Red light */}
        <div
          style={{
            width: "60px",
            height: "60px",
            background: activeLight === "red" ? "#f00" : "#555",
            borderRadius: "50%",
            margin: "0 auto",
          }}
        ></div>
        {/* Yellow light */}
        <div
          style={{
            width: "60px",
            height: "60px",
            background: activeLight === "yellow" ? "#ff0" : "#555",
            borderRadius: "50%",
            margin: "0 auto",
          }}
        ></div>
        {/* Green light */}
        <div
          style={{
            width: "60px",
            height: "60px",
            background: activeLight === "green" ? "#0f0" : "#555",
            borderRadius: "50%",
            margin: "0 auto",
          }}
        ></div>
      </div>
    </div>
  )
}

export default TrafficLight