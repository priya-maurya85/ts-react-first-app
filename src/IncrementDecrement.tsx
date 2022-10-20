import React, { useState } from 'react'

const IncrementDecrement = () => {
    const [counter, setCounter]  = useState(0);

    const handleIncrement = () => {
        setCounter(counter+1);
    }
  return (
   <>
   <h1>{counter}</h1>
   <button onClick={handleIncrement}>Increment</button>
   </>
  )
}

export default IncrementDecrement