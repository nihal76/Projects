import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  },[count]);

const changeBg = (e) => {
    if (e.target.innerText === 'Dark mode') {
        setOtherState((prevState) => {
            console.log(`Dark bg ${!prevState}`);
            return !prevState; 
        });
    } else {
        setOtherState((prevState) => {
            console.log(`Light bg ${!prevState}`);
            return !prevState;
        });
    }
};


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
       <button  onClick={changeBg} >Dark mode</button>
         <button  onClick={changeBg} >light mode</button>
    </div>
  );
}

export default Counter;
