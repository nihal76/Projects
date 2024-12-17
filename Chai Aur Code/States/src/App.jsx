import React, { useState, useEffect } from "react";
const App = ()=> {
 
const [darkBg, setdarkBg] = useState(false);
const[color, setColor] = useState('white');
  const  increment =  ()=> {
    setCount(count+1);
  }

  const changeBg = () => {
      setdarkBg(! darkBg);
  }

  
  const [count,setCount] = useState(0);
  useEffect(() => {
    document.body.style.backgroundColor = darkBg ? 'black' : 'white';
    {darkBg ? setColor('black') : setColor('white')}
  });

   return (
     <>
    {/* {darkBackground ? 'dark' : 'light'} */}
       <div>
      <h3>React Hooks</h3>
      <p>useState and useEffect</p>
      <button onClick={increment}>Add</button>
      <button onClick={changeBg}>{color}</button>
      <main><h3>{count}</h3></main>
      <footer><h3>{count}</h3></footer>
    </div>
    </>
   )
}

export default App;