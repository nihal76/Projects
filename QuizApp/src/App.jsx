import React, { createContext, useEffect, useState } from 'react'
import { Routes, Route  } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Gameplay from './Gameplay'
import Result from './Result'
  export const AppContext = createContext()
const App = () => {
  const [bg, darkbg] = useState(false)
  const [name, setname] = useState('')
  useEffect(function change(){
     if(bg){
       document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    return
     }
     document.body.style.backgroundColor = 'white'
     document.body.style.color = 'black'  
  },[bg])
  return (
<>
  <>
    <button className='bg-red-500 text-white mt-2 ml-2 p-2 rounded-sm text-xs' onClick={() => darkbg(! bg)}>{(bg) ? 'Dark' : 'Light'}</button>
      <div className='flex flex-col gap-5'>
                        {/* {logo} */}
                <div class="flex items-end justify-center space-x-3 m-4">
            <div className="bg-purple-600 text-white p-3 rounded-full">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-3 9a9 9 0 110-18 9 9 0 010 18z"></path>
                </svg>
            </div>
            <h1 className="text-5xl font-bold text-purple-600">Quizzy</h1>
        </div>
        </div>
  </>

<AppContext.Provider value={name}>
  <Routes>
      <Route path="/" element={<Home name = {name} setname = {setname}/>} />
      <Route path="/category" element={<Category />} />
       <Route path="/gameplay" element={<Gameplay />} />
        <Route path="/result" element={<Result />} />
    </Routes>
</AppContext.Provider>
</>
  )
}

export default App