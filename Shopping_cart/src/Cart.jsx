import React, { useContext, useEffect, useState } from 'react'
import {GlobalContext} from './App'
import { Link } from 'react-router-dom'
   import { useNavigate } from 'react-router-dom';
import Payment from './Payment'

const Cart = () => {
  let sum = 0
  const {cart,setcart} = useContext(GlobalContext)
    const navigate = useNavigate();
  console.log('cart data  ', cart)


const Purchase = (item) => {
  console.log('Purchase the item',item)
  navigate('/Payment', { state: item })
}

const setQuantity = (i, op) => {
  cart.forEach((item, index) => {
    if (i === index) { 
      if (op === '+') {
        item.amount += 1;
      } else if (op === '-') {
        item.amount -= 1;
      }
      console.log('item', item);
      console.log('array')
   const updated = [...cart]
   setcart(updated)
    }
  });
};

   {cart.map((item) => sum = sum + item.price * item.amount)}
  return (
   <>
       <div id='cartPage'>
    <Link style={{marginRight : '1em'}} to={'/index'}>Back</Link>
     {cart.map((item,i) =>(
      <section key={i}>
        <img src={item.img}></img>
        <p>Title :{item.title}</p>
        <p>Price :{item.price * item.amount}</p>
        <button onClick={() => setQuantity(i,'+')}>+</button>
        <span style={{marginLeft : '0.4em'}}>{item.amount}</span>
        <button onClick={() => setQuantity(i,'-')}>-</button>
        <button onClick={() => setcart(cart.filter((item,index) => index !=i ))}>Remove</button>
        <button style={{backgroundColor : 'darkred', color : 'White'}}onClick={() => Purchase(item)}
        // useNavigate('/Payment') hooks cannot be called inside jsx
          >Buy Now</button>
      </section>
     ))}
    </div>
        <span style={{backgroundColor:'green', padding : '1em' , color:'whitesmoke', marginBottom : '0'}}><strong>Total:{(sum != 0) ?sum : 'No items in cart'}</strong></span>
   </>
  )
}

export default Cart