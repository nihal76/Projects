import React, { useMemo, useState } from 'react'

const NewComponent = React.memo((props) => {
      const[text, setInput] = useState('')
  console.log('new component rendering')
   let sum = 0;

 const result = useMemo(function computation(){
   for(let i = 0; i<100000000; i++){
     sum = sum + i;
   }
   console.log('expensive computation')
       return sum;
},[props])


function handleClick(e){
  setInput(e.target.value)
  console.log('handling onchange event in child')
}

  return (
    <>
       <h2>Child Component</h2>
        <h2>Props from App parent , Count : {props.count}</h2>
        <input type='text' placeholder='type..' onChange={handleClick}/>
       <h4>Sum :  {result}</h4>
    </>
  )
})

export default NewComponent