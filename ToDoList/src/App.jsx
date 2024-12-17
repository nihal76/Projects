// import React from 'react'
// import { useState } from 'react'

// const App = () => {
// const[todos,setTodos] =  useState([])
// const[task,setTask] = useState('')
// const[editIndex, setIndex] = useState(null)
// const[editing, setEdit] = useState(false)

// const handleChange = (e)=> {
//     console.log(e.target.value)
//     setTask(e.target.value)
// }
// const addTask = (e)=> {
//   if(task && ! editing){
//     console.log(e.target)
//   setTodos([...todos, task]); 
//   } 
//   else {
//     const updateToDo = [...todos]
//     updateToDo[editIndex] = task
//     setTodos(updateToDo)
//     setEdit(false)
//   }
//    setTask('');
// }

// const deleteTask = (index)=> {
//     setTodos( todos.filter((item,index2) => index != index2 ))
// }

// const editTask = (index) => {
//     setTask(todos[index])
//     setEdit(true)
//     setIndex(index)
// }
//   return (
//     <div>
//       <input type='text' name='todo' value={task} onChange={handleChange}/>
//       <button onClick={addTask}>Add task</button>
//   {todos && todos.length > 0 ? (
//   todos.map((task, index) => (
//     <section>
//       <p>{task}</p>
//       <button onClick={() => editTask(index)}>Edit</button>
//       <button onClick={() => deleteTask(index)}>Delete</button>
//     </section>
//   ))
// ) : (
//   <p>No tasks available</p>
// )}

//     </div>
//   )
// }
// export default App


import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

const App = () => {

      const states = {
     task : '',
     todos : [],
     editing : false,
     editIndex : null
  }
  
  const reducer = (states,action) => {
      if(action.type === 'todo'){
        return {...states, task : action.value}
      }
      else if(action.type === 'Add task'){
      return {...states, todos : [...states.todos,states.task], task : ''}
      }
      else if(action.type === 'Delete'){
         return {...states, todos : states.todos.filter((item,i) => i!= action.value)}
      }

      // else if(action.type === 'Edit'){
      //   const updateToDos = [...states.todos]
      //   updateToDos[action.ind] = states.task
      //   return {...states,task : action.value,editing : true, editIndex : action.ind}
      // }
  }


   const[initialstate, dispatch] = useReducer(reducer,states)  

const handleChange = (e) => {
     dispatch({type : e.target.name , value : e.target.value})
}

 const addUpdateTask = (e) => {
     if(!initialstate.editing && e.target.innerText === 'Add task'){
      dispatch({type : e.target.innerText, value : initialstate.task})
     }
    //  else{
    //   dispatch({type : e.target.innerText, value : states.todos[index], ind : index})
    //  }
 }

 const deleteTask = (index,e) => {
    dispatch({type : e.target.innerText, value : index})
 }
  return (
    <div>
      <input type='text' name='todo' onChange={handleChange} value={initialstate.task}/>
      <button onClick={addUpdateTask}>Add task</button>
        <a href='node.js'>Node js</a>
  {initialstate.todos && initialstate.todos.length > 0 ? (
  initialstate.todos.map((task, index) => (
    <section>
      <p>{task}</p>
      <button onClick={() => addUpdateTask(index)}>Edit</button>
      <button onClick={(e) => deleteTask(index,e)}>Delete</button>
    </section>
  ))
) : (
  <p>No tasks available</p>
)}
    </div>
  )

}

export default App