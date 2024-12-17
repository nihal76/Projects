import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
export const HomeContext = createContext();
const Home = ({name, setname}) => {
  // const[name,setname] = useState('')
  const[error,seterror] = useState(false)
  const navigate = useNavigate()
  function storeName(){
    if(name.length > 0){
    navigate('/category')
    }
    else{
      seterror(true)
      setTimeout(() => {
        seterror(false)
      },3000)
    }
  }
  return (
  <HomeContext.Provider value = {name}>    
  {/* App */}
     <main className='flex flex-col  h-screen m-10'>
        {/* form */}
        <div className='flex justify-center'>
          <section className='flex flex-col w-1/4 gap-2'>
           <h1> Enter Your Name</h1>
   <input type='text' className= 'bg-slate-200 text-amber-950 h-8' placeholder={name} onChange={(e) => setname(e.target.value)} />
   <p className='text-red-700 font-semibold text-sm'>{error ? 'Field cannot be empty' : ''}</p>
   <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4"onClick={storeName} >
  Start
</button>
      </section>
        </div>
     </main>
  </HomeContext.Provider>
  )
}

export default Home