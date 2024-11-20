import React from 'react'

const Unordered = ({numbers}) => {
  return (
    <>
        <ul>
            {numbers.map((number) => {
                return <li key={number.toString()}>{number}</li>
            })}
        </ul>
    </>
  )
}

export default Unordered