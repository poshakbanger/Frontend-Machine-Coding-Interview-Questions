import React, { useState } from "react";

function Counter () {

    const [state,setState] = useState(0);

    const increment = () => {
        setState(state + 1);
    }

    const decrement = () => {
        setState(state - 1);
    }

    return (
        <div>
            <h1>Increase</h1>
            {state}
            <button onClick={increment}>Click me</button>
            <h1>Decrease</h1>
            <button onClick={decrement}>Click me</button>
        </div>
    )
}
export default Counter;