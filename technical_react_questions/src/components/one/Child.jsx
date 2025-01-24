import React from 'react'

function Child ({ message, onButtonClick })  {
  return (
    <div>
        <h2>Child Component</h2>
        <p>{message}</p>
        <button onClick={onButtonClick}>Click Me!</button>
    </div>
  )
}

export default Child