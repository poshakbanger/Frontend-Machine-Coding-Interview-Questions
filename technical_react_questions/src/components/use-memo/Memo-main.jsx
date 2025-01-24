// import React, { useMemo } from "react";

// function Memo-main (){

//     const expCal = useMemo(() => {
//         console.log("Performing expensive calculation...");
//         return num * 2;
//     },[num])

//     return (
//         <div>Result: {expensiveCalculation}</div>
//     )
// }
// export default Memo-main;

import React, { useState, useMemo } from "react";

function Memo-main({ num }) {
  const expensiveCalculation = useMemo(() => {
    console.log("Performing expensive calculation...");
    return num * 2; // Simulate expensive computation
  }, [num]);

  return <div>Result: {expensiveCalculation}</div>;
}

function App() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Memo-main num={number} />
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;
