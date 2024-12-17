import React, { useState } from 'react'

const App = () => {

 const[switchOn, setSwitch] = useState(false);

  return (
    <>
      <input type='checkbox' onChange={() => setSwitch(! switchOn)} />
      <p>{(switchOn) ? 'On' : 'Off'}</p>
    </>
  )
}

export default App