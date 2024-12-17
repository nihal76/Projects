import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from './App'
const Result = () => {
  const[score,setscore] = useState(0)
  const location = useLocation()
  const name = useContext(AppContext)
  // answer history
  console.log('location ',location)
 const answers = location.state.updatedhistory
 const correctans = {
     backgroundcolor : 'lightgreen',
     fontWeight : 'bold'
 }
 const wrongans = {
  backgroundcolor : 'lightred',
  fontWeight : 'bold'
 }
//  set score
  useEffect(() => {
    answers.map((result) => (result.correct == result.userans) ? setscore(score =>  score + 1) : '' )
  },[])
 console.log(answers)
  return (
    <div>
    <center className='mt-2 mb-7'>
        <h1 className='text-purple-800'>{name}</h1>
        <h2 className='font-semibold text-xl text-red-600'>Your Score in {location.state.quizcategory}</h2>
      <h2 className='font-semibold text-2xl p-3 text-purple-800'>{score}/{answers.length}</h2>
    </center>
     {answers.map((result,index) => (
    <div className='ml-auto mr-auto w-2/4'>
       <h1 className='font-semibold text-sm pb-2'>{index+1}. {result.ques}</h1>
 <section className='font-sans text-sm'>
       { (result.userans === result.correct) ? 
       result.options.map(option => <>
        <p
   style={{backgroundColor : (option === result.correct) ? 'lightgreen' : '', width : 'fit-content', padding : '1'}}>{option}</p>
       </>)
      :  result.options.map(option => (
        (option === result.userans) ? <p className='bg-red-300 w-fit pt-1 pb-1'>{option}</p> : (option === result.correct) ? <p className='bg-green-300 w-fit pt-1 pb-1'>{option}</p> : <p>{option}</p>
     ))}
 </section>
     <div>
     <h1 className='text-sm mt-2 font-semibold' 
     style={{ color : (result.userans === result.correct) ? 'darkgreen' : 'red'} }
     > {(result.userans === result.correct) ? 'Correct' : 'InCorrect'}</h1>
     <h3 className='font-semibold text-sm  text-purple-800 bg-slate-200 mt-2 mb-2'>{result.feedback}</h3>
     </div>
    </div>
     ))}
    </div>
  )
}

export default Result