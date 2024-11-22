import React, { useEffect, useState } from 'react'

const MyComponent = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        //perform any side effect
        console.log("component mounted");

        return () => {
            //cleanup duty...
            console.log("unmounted");
        }
    }, []);

    useEffect(() => {
        console.log("Component updated with: " + count);
    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h1>Component Content</h1>
        <p>{count}</p>
        <button onClick={handleClick}>increment</button>
    </div>
  )
}

export default MyComponent