import { useState } from 'react'
import data from './data.json'
import './index.css'



const App = () => {
  const[Data, setData] = useState(data)
  console.log(Data[0])
  // clear json data when button is clicked
const handleClick = ()=> {
   setData([])
}
// delete specific product details
const deleteProduct = (deleteid)=> {
    setData(Data.filter(item => item.id != deleteid ))
}

  return (
        <>
        <div id = 'container'>
       {Data.map((json) => {
               return(
               <div>      
        <img src={json.image} />
        <h4 style={{color:'darkred', fontWeight:'bold'}}>{json.category}</h4>
        <p>{json.description}</p>
        <button onClick={() => deleteProduct(json.id)}>Delete</button>
             </div>
               );
       })}
       </div>
        <button style={{padding:'0.5em', backgroundColor:'lightblue', color:'black'}} onClick={handleClick}>Clear</button>
       </>
  )
}

export default App;