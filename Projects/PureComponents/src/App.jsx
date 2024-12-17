import React, { useEffect } from 'react';

// Pure functional component that re-renders only when count changes
// Parent component
const App = () => {
  const [count, setCount] = React.useState(1);
  const[double, setDouble]  = React.useState(count)
  const [title, setTitle] = React.useState("My Count Component");

 useEffect(() => {
  console.log('Rendering count:', count);
  console.log('rendering double count', double)
  }, [count,double] )

    const increment = () => { 
        setCount(prev => { 
          prev = prev + 1
          setDouble(prev * 2)
          return prev
      })
      //  setCount(prev => prev + 1)
      //   setDouble(alag => alag * 2)asynchronous execution
        }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={increment}>Increment Count</button>
      <button onClick={() => setTitle(title === "My Count Component" ? "Updated Title" : "My Count Component")}>
        Change Title
      </button>
      <h1>Count: {count}</h1>
      <h2> Double : {double}</h2>
    </div>
  );
};

export default App;
