import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(undefined);

    useEffect(() => {
        countRef.current = count
    },[count]);

    const handleAlert = () => {
        setTimeout(() => {
            alert("count: " + countRef.current)
        }, 1000);
    }
  return (
    <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={handleAlert}>Show alert</button>
    </div>
  )
}

export default Timer