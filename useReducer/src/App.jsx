import React, { useReducer } from 'react'

const App = () => {
  const initial = {
    username : '',
    Phone : '',
    Email : ''
  }
 const[state,dispatch] = useReducer(reducer,initial)

const handleForm = (e)=> {
   e.preventDefault();
   dispatch(initial,{type : 'username', type : 'Phone', type : 'Email'})
}

const reducer = (initial,action)=> {
     
}

  return (
    <form action='handleForm'>
      username : <input  type='text' name='username' value={username}/>
      Phone : <input type='Phone' name='Phone' value={Phone}/>
      Email : <input type='email' name='Email' value={Email}/>
      <input type='submit'/>
    </form>
  )
}

export default App