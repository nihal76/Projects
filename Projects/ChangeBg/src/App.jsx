import React, { createElement, useEffect, useState } from 'react'

const element = React.createElement('p',{id : 'react-ele'},'this is react element');
const element2 = React.createElement('div',{id:'react-ele2'}, 'div container', createElement('h3',{style : {color: 'red', textAlign : 'center'}}, 'heading'))

const App = () => {
 const[darkbg,setdark] = useState(false);

 useEffect(() => {
    (darkbg) ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'white';
 },[darkbg])

    function clicked(e){
     (e.target.innerText === 'Dark') ? setdark(true) : setdark(false)
    }


  return (
      <div id='box' onClick={clicked}>
        <button>Dark</button>
      <button>Light</button>
      {element}
      {element2}
      </div>
  )
 
}

export default App