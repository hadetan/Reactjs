import React from 'react'
import { useSelector } from 'react-redux'

const Child2 = () => {
    const message = useSelector(state => state.messageReducer.message);
  return (
    <div>
        <h1>The data from other child is: {message}</h1>
    </div>
  )
}

export default Child2