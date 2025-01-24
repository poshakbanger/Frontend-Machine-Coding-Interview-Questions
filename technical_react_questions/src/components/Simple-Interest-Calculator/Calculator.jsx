import React, { useState } from 'react'

const Calculator = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [loanIntRate, setLoanIntRate] = useState(0);
    const [interest, setInterest] = useState(0);

    
    const calulateInterest = () => {
        const si = (loanAmount * loanTerm * loanIntRate) / 100;
        setInterest(si);
    };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Simple Interest Calculator</h1>
        <div style={{ marginBottom: "10px" }}>
            <label>
                Principal (P):
                <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} style={{ marginLeft: "10px" }}/>
            </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
        <label>
          Rate of Interest (R%): 
          <input
            type="number"
            value={loanIntRate}
            onChange={(e) => setLoanIntRate(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Time (T years): 
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <button onClick={calulateInterest} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Calculate
      </button>
      {interest !== null && (
        <div style={{ marginTop: "20px" }}>
            <h2>Calculated Simple Interest: {interest}</h2>
        </div>
      )}
    </div>
  )
}

export default Calculator