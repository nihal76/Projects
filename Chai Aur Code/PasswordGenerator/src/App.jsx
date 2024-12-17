import React, {useState} from 'react'
import './App.css'

const App = () => {
const [length,setLength] = useState(8);
const [numbers, setNumbers] = useState(false);
const [character, setCharacter] = useState(false);
const[password, setPassword] = useState('');

  return(
    <>
      <h2 className = 'bg-red-400'>React Hooks</h2>
      <h5 style={{color:'#f9a8d4'}}>useEffect, useRef, useCallback</h5>
      <div className='bg-red-200 px-5 flex flex-col gap-3' style={{width:'50%', height : '10em'}}>
             <h4 style={{textAlign:'center'}}>Password generator</h4>
             <section>
              <input  className='w-2/3 h-8 my-auto ' type='text' name='password' value={password}  placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> {" "}
        <button className='bg-blue-400 text-white h-10 w-1/12 my-auto '>Copy</button>
             </section>
                     <input type='range' min={6} max={30} value={length} onChange={(e) => setLength(e.target.value)}/>
                     <section className='flex gap-4 justify-center'>
                      <label >Length : {length}</label>
                      <div>
                      <label className='mx-2' >Characters</label>
                        <input type='checkbox' defaultChecked = {character}></input>
                      </div>
                      <div>
                   <label className='mx-2' >Numbers</label>
                   <input type='checkbox' defaultChecked = {numbers} onChange={ (prev) => {
                    setNumbers(!prev)
                   }}></input>
                      </div>
                     </section>
      </div>
    </>
  )
}
export default App;


