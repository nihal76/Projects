import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
 const[time,setTime] = useState(15)



  useEffect(() => {
    if (time > 0) {
      const interval = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      
      // Cleanup function to clear the timeout if the component unmounts or time changes
      return () => clearTimeout(interval);
    }
  }, [time]); 
 
  return (
    <p>Remaining time : {time} seconds</p>
  )
}

const Counter = () => {
   const[count,setCount] = useState(0)
   return (
    <>
       <button onClick={() => setCount(count + 1)}>Increment</button>
       <span>Count: {count}</span>
    </>
   )
}

export default App