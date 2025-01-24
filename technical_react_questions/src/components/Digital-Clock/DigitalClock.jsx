import React, { useState, useEffect } from "react";
import "./DigitalClock.css"; // Import the CSS file for styling the segments

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to render individual segments of a digit
  const renderDigit = (digit) => {
    const segments = [
      ["top"],
      ["top-right"],
      ["bottom-right"],
      ["bottom"],
      ["bottom-left"],
      ["top-left"],
      ["middle"],
    ];

    const digitMap = {
      0: [true, true, true, true, true, true, false],
      1: [false, true, true, false, false, false, false],
      2: [true, true, false, true, true, false, true],
      3: [true, true, true, true, false, false, true],
      4: [false, true, true, false, false, true, true],
      5: [true, false, true, true, false, true, true],
      6: [true, false, true, true, true, true, true],
      7: [true, true, true, false, false, false, false],
      8: [true, true, true, true, true, true, true],
      9: [true, true, true, true, false, true, true],
    };

    return (
      <div className="digit">
        {segments.map((segment, index) => (
          <div
            key={index}
            className={`segment ${segment} ${digitMap[digit][index] ? "on" : "off"}`}
          ></div>
        ))}
      </div>
    );
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formattedTime = formatTime(time);

  return (
    <div className="digital-clock">
      {formattedTime.split("").map((char, index) =>
        char === ":" ? (
          <div key={index} className="colon">:</div>
        ) : (
          renderDigit(Number(char))
        )
      )}
    </div>
  );
};

export default DigitalClock;