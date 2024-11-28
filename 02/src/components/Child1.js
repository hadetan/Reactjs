import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setMessage } from '../store/slices/MessageSlice';

const Child1 = () => {
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputValue = inputRef.current.value;

        dispatch(setMessage(inputValue));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef}/>
            <input type="submit" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default Child1