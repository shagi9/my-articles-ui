import React, { useState } from "react";
import './Counter.scss';

export const Counter = () => {
    const [count, setCounter] = useState(0);

    const IncrementCounter = () => {
        setCounter(count + 1);
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={IncrementCounter}>increment</button>
        </div>
    )
}