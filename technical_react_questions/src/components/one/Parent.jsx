import React from 'react'
import Child from './Child';

function Parent (){

    const message = "hello from parent component ";
    const handleClick = () => {
       console.log("Button clicked in Child.")
    };

  return (
    <div>
        <h1>Parent Component</h1>
        <Child message={message} onButtonClick={handleClick}/>
        
    </div>
  )
}

export default Parent