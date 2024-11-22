import React, { useEffect, useRef, useState } from 'react'

const UncontrolledForm = () => {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(inputRef.current.value)
    }

    useEffect(() => {
        console.log(inputRef.current.value);
    }, [inputRef])

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Your name is submitted with:" + inputRef.current.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input type="text" id='name' onChange={handleChange} ref={inputRef}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
        {value}
    </div>
  )
}

export default UncontrolledForm