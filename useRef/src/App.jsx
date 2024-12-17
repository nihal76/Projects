// import React, { useState } from 'react'
// import { useRef } from 'react';
// const App = () => {
//       const inputRef = useRef(null);
//       const [count,setcount] = useState(0)
//       const[name,setname] = useState('')
//     const focusInput = () => {
//         inputRef.current.focus();
//         console.log(inputRef.current)
//         // inputRef.current.value  = 'its ref'
//         console.log(inputRef)
//     };


//     function handleInput(){
//           inputRef.current.style.backgroundColor = 'red'
//            inputRef.current.style.color = '#fff'
//            inputRef.current.value = 10 + 20
//     }
//   return (
//     <div>
//         <input ref={inputRef} type="text" id='box' value={name} onChange={(e) => setname(e.target.value)}/>
//             <button onClick={focusInput}>Focus Input</button>
//             <button onClick={handleInput}>Add</button>
//             <div>
//               {count}<br></br>
//               <button onClick={() => setcount(count => count + 1)}>+</button>
//                <button onClick={() => setcount(count => count - 1)}>-</button>
//             </div>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    console.log('component rendered ',count+1 + 'times')
    prevCountRef.current = count;  // Store previous count in ref
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
