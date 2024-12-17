import React, { useState } from 'react'

const quotes = [
  `Whoever loves to meet God, God loves to meet him ~ Prophet Muhammad Pbuh`,
  `Who is the most favored of God? He from whom the greatest good comes to His creatures ~ Prophet Muhammad Pbuh`,
  `The strong person is not the good wrestler. Rather,the strong person is the one who controls himself when he is angry ~ Prophet Muhammad`,
  `There is a polish for everything that takes away rust, and the polish for the heart is the remembrance of God ~ Prophet Muhammad Pbuh`,
  `You will not enter paradise until you have faith. And you will not complete your faith until you love one another ~ Prophet Muhammad Pbuh`,
  `Strive always to excel in virtue and truth. ~ Prophet Muhammad Pbuh`,
  `The worldly comforts are not for me. I am like a traveler, who takes rest under a tree in the shade and then goes on his way ~ Prophet Muhammad Pbuh`,
  `Verily, God is Compassionate and is fond of compassion, and He gives to the compassionate what He does not give to the harsh. ~ Prophet Muhammad`
]
 
const App = () => {
    const [quote,setquote] = useState(`Click "Get Quote" to get your quote of the day`)

const generatequote = () => {
  setquote(quotes[ Math.floor(Math.random() * quotes.length)])
}

  return (
    <div>
      <h2>Islamic Quotes</h2>
      <div>{quote}</div>
      <button style={{margin:'1em'}} onClick={generatequote}>Get Quote</button>
    </div>
  )
}

export default App