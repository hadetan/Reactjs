import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setTimer(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            //cleanup duty ->
            clearInterval(timerRef.current);
        }
    }, [timer]);
  return (
    <div>
        <p>Timer: {timer} seconds</p>
        <button onClick={() => clearInterval(timerRef.current)}>Stop</button>
    </div>
  )
}

export default StopWatch