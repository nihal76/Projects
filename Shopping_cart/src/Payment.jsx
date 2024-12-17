import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Payment.css'

const Payment = () => {
    const location = useLocation();
  const[data, setdata] = useState(location.state)
  console.log('Payment data ', data)
 console.log('state property ', location)

  return (
    <div>
      <h5>Order Summary</h5>
      <section className='status'>
        <span className='round'>1 <br></br>Address</span>
        <span className='round'>2<br></br>Order Summary</span>
        <span className='round'>3<br></br>Payment</span>
      </section>
      {/* product */}
      {(data) ?
      <>
        <strong>{data.title}</strong>
      <p>Total : {data.price * data.amount}</p>
      <p>Quantity : {data.amount}</p>
      <button>Pay {data.price * data.amount}</button>
      <button onClick={() => setdata(null)}>Remove</button>
      </> : <p>No product</p> }
    </div>
  )
}

export default Payment