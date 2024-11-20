import React, { useState } from 'react'

const Child1 = ({onCountUpdate}) => {
    const [countInChild1, setCountInChild1] = useState(0);

    const updateCountInChild1 = () => {
        setCountInChild1(countInChild1 + 1);

        onCountUpdate(countInChild1 + 1);
    }
  return (
    <div>
        <p>Inside child 1: {countInChild1}</p>

        <button onClick={updateCountInChild1}>Increment</button>
    </div>
  )
}

export default Child1