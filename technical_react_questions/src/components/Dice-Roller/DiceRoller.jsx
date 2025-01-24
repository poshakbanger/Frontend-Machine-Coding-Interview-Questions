// import React, { useState } from 'react'

// const DiceRoller = () => {
//   const [numberOfDice,setNumberOfDice] = useState(1);
//   const [diceResults,setDiceResults] = useState([]);

//   const handleRollDice = () =>{ 
//     const result = Array.from({ length: numberOfDice }, () => {
//       Math.floor(Math.random() * 6) + 1;
//     })
//     setDiceResults(result); 
//   };

//   const handleInputChange = (event) =>{ 
//     const value = parseInt(event.target.value,10);
//     if (value >= 1 && value <= 12) {
//       setNumberOfDice(value);
//     }
//   }
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//       <h2>Dice Roll</h2>
//       <div style={{ marginBottom: "20px" }}>
//         <label htmlFor="diceInput">Number of Dice: </label>
//         <input 
//           id="diceInput"
//           type="number"
//           min="1"
//           max="12"
//           value={numberOfDice}
//           onChange={handleInputChange}
//           style={{ padding: "5px", marginLeft: "10px" }} 
//         />
//         <button onClick={handleRollDice} style={{ padding: "10px 20px", marginLeft: "10px", cursor: "pointer" }}>
//           Roll
//         </button>
//       </div>
//       <div 
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "10px",
//           padding: "20px",
//           border: "1px solid #ccc",
//           borderRadius: "10px",
//         }}>
//           {diceResults.map((result,index)=> (
//             <div
//             key={index}
//             style={{
//               width: "60px",
//               height: "60px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "20px",
//               border: "1px solid #000",
//               borderRadius: "8px",
//               backgroundColor: "#f9f9f9",
//             }}
//           >
//             {result}
//           </div>
//           ))}
//       </div>
//     </div>
//   )
// }

// export default DiceRoller;

import React, { useState } from 'react';
import "./styles.css";
function DiceRoller() {
  const [numDice, setNumDice] = useState(1);
  const [rolls, setRolls] = useState([]);

  const handleNumDiceChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 12) {
      setNumDice(value);
    }
  };

  const handleRoll = () => {
    const newRolls = [];
    for (let i = 0; i < numDice; i++) {
      newRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    setRolls(newRolls);
  };

  return (
    <div>
      <label htmlFor="numDice">Number of Dice:</label>
      <input
        type="number"
        id="numDice"
        value={numDice}
        onChange={handleNumDiceChange}
        min="1"
        max="12"
      />
      <button onClick={handleRoll}>Roll</button>

      <div className="dice-container">
        {rolls.map((roll, index) => (
          <div key={index} className="dice-row">
            {index % 3 === 0 && <div className="dice-row-start"></div>}
            <div className="dice">
              <span>{roll}</span>
            </div>
            {index % 3 === 2 && <div className="dice-row-end"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiceRoller;