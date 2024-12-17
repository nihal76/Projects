import React, { useEffect, useState } from 'react'
import * as Quiz from './Data'
import { useLocation, useNavigate } from 'react-router-dom'

const Gameplay = () => {
  const navigate = useNavigate()
   const location = useLocation()
   const quizcategory = location.state
 const {gk,science,technology} = Quiz

    let category
      if(location.state === 'Technology'){
       category = technology
  }
  else if(location.state === 'Science'){
     category = science
  }
  else{
     category = gk
  }
  console.log('Category - ', category)
  const [index,setindex] = useState(0)
const [question, setquestion] = useState(category[index].question)
  const[options, setoptions] = useState(category[index].options)
  const[userans,setuserans] = useState(null)
  const[history,setHistory] = useState([])
  const [progress,setprogress] = useState(0)
  const[updateprevious, setupdate] = useState(false)
  // update user selected answer state
   console.log('question ', category[index].question)

     console.log('user ans ', userans)

  // change questions
  const nextQuestion = () => {
    // add user selected option(userans) to history before navigating to next question
    console.log('user ans ', userans)
    if(updateprevious){
      // if user wants to change previous answered question , then change userans state and add it as property  in previous question object 
       if(history[index].userans != userans){ 
           const update = {...history[index],userans : userans}
      history[index] = update
      console.log('updated history ', history)
      setHistory((prevhistory) => {
        const updated = [...history]
        setindex(index + 1)
        setupdate(false)
        return updated
      })
    } 
    else{
      /* if answer hasn't changed then no update , just display the next question*/
         setindex(index + 1)
        setupdate(false)
    }
      
    }
     else{
      const obj = {
      ques : category[index].question,
      options : category[index].options,
      correct : category[index].correctAnswer,
       userans : userans,
           id : index,
           feedback : category[index].feedback
    }
    setHistory((prevhistory) => {
      const updatedhistory = [...prevhistory,obj]
            //  update index to reflect next or previous question on UI and progress
       setindex(index + 1);
    setprogress(progress + 1);
    return updatedhistory
    })
     }
};
  console.log('historyy arr' , history)

  const previousQuestion = () => {
      setindex(prev => {
           const previous = prev - 1
           setupdate(true)
           return previous
        })
  }

  useEffect(() => {
    console.log('use effect running to update ques and ans')
     setquestion(category[index].question)
      setoptions(category[index].options)
  },[index])

  // submit history of user answers
  const submitans = () => {
  //  adding last answered question before navigating to result page
     const obj = {
      ques : category[index].question,
      options : category[index].options,
      correct : category[index].correctAnswer,
       userans : userans,
       id : index,
         feedback : category[index].feedback
    }
    setHistory((prev) => {
      const updatedhistory = [...prev,obj]
      navigate('/result',{state : {updatedhistory,quizcategory}})
    })
  }
 return <div>
 <center className='font-semibold text-red-400 text-xl'>
   Welcome
    <h2 className='text-purple-600'>You Selected {location.state}</h2>
 </center>
 {/* Quiz */}
 <span>Answered {progress}/5</span><br></br>
 <progress value={progress} max={5} className='mt-2 ml-2'></progress>
 <section className='m-2 mt-7'>
    <h2 className='font-semibold text-lg'>Question {index + 1} {question}</h2>
    <div className='m-2'>
      {options.map((ans,index) => <>
           <div className='flex justify-between h-8 hover:bg-slate-800 hover:text-blue-100'>
         <label key={index} className='ml-5 '>{ans}</label>
          <input type='radio'  name='answer' onClick={() => setuserans(ans)} className='mr-10 w-6'/>
           </div>
<br></br>
      </>)}
    </div>
<div class="inline-flex">
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={previousQuestion}>
    Prev
  </button>
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ml-10 rounded-r" onClick={nextQuestion}>
    Next
  </button>
</div>
<br></br>
  {(index == category.length - 1) ? <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-5 rounded" onClick={submitans}>
    Submit
  </button> : ''}
 </section>
 </div>
}
export default Gameplay