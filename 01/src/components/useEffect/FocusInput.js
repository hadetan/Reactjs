import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef.current);
    }, [])

  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default FocusInput