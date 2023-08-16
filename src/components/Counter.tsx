import React, { useState } from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCounter] = useState(0);

    const IncrementCounter = () => {
        setCounter(count + 1);
    }
    
    return (
        <div className={styles.btn}>
            <h1>{count}</h1>
            <button onClick={IncrementCounter}>increment</button>
        </div>
    )
}