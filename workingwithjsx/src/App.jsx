import React from 'react'

export const App = () => {
  const person = {
    name : "Waseem",
    gmail : "nihal@gmail.com",
    passion: 'coding'
  }
  let result;
  let tired = false;
  // statements outside jsx
   if(tired){
   result = <p>Take rest</p>
   }
   else {
    result = <>
     <h4>Work hard</h4>
     <p>Dreams demands scarifice</p>
    </>
   }


return (
  <>
    <h3>Javascript XML</h3>
    <p>
      JSX, or JavaScript XML, is a syntax extension used in React to make
      writing HTML-like code inside JavaScript easier
    </p>
    {/* using expression inside jsx */}
    <h3>{person.name}</h3>
    <h3>{person.passion}</h3>
    <p>{result}</p>
    {/* boolean values doesn't get rendered(false,true,null,undefined) */}
  </>
);
}
