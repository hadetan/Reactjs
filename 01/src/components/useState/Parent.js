import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [countInParent, setCountInParent] = useState(0)

    const updateCountInParent = (count) => {
        setCountInParent(count);
    }
  return (
    <>
        <p>Inside parent: {countInParent}</p>

        <Child1 onCountUpdate={updateCountInParent}/>
        <Child2 countFromParent={countInParent}/>
    </>
  )
}

export default Parent