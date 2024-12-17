import React, { useState } from 'react';
import NewComponent from './NewComponent.jsx'

function App() {
  console.log('App component')
  const [count, setCount] = useState(0);
    const[text, setInput] = useState('')

  
function handleClick(e){
  setInput(e.target.value)
  console.log('handling onchange event')
}

  const increment = () => {
    setCount(count + 1);
 
  };

  const decrement = () => {
    setCount(count - 1);

  };

  return (
    <>
   <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
              <input type='text' onChange={handleClick}/>
                      <p>Input : {text}</p>
    </div>
        <NewComponent count = {count}/>
    </>
  );
}

export default App;