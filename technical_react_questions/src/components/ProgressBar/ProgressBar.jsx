import React, { useState } from 'react'
import "./Styles.css";

const ProgressBar = () => {
    const [progressBars, setProgressBars] = useState([]);

    const addProgressBar = () => {
        setProgressBars([...progressBars, { id: Date.now(), progress: 0 }]);
    }

  return (
    <div className='App'>
        <h1>Progress Bar Demo</h1>
        <button onClick={addProgressBar}>Add</button>
        <div className='progress-bars'>
            {progressBars.map((bar) => (
                <div key={bar.id} className="progress-bar">
                    <div className='progress'
                         style={{ width: `${bar.progress}%`}}/>
                </div>
            ))} 
        </div>
    </div>
  )
};
export default ProgressBar;