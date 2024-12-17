import React, { useEffect, useState } from 'react'
import Products from './Products';
import Cart from './Cart'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createContext } from 'react';
import './App.css'
import Payment from './Payment';

export const GlobalContext = createContext();

const App = (child) => {
  // const[cart,setcart] = useState([])
    // Initialize cart from localStorage if it exists
  const [cart, setcart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart items'));
    return savedCart || [];
  });

  const[bg, changebg] = useState(false)
  const[msg, setmsg] = useState('')

   useEffect(() => {
   (bg) ? document.body.style.backgroundColor = 'black' : document.body.style.backgroundColor = 'whitesmoke'
   },[bg])

    if(bg){
      document.body.style.color = 'White'
    }
    else{
        document.body.style.color = 'black'
    }

    useEffect(() => {
         localStorage.setItem('cart items', JSON.stringify(cart))
    },[cart])

const callback = (child) => {
  setcart((prevCart) => [...prevCart, child]);
}
console.log('cart ', cart)
   
  return (
   <GlobalContext.Provider value = {{cart, setcart}}>
        <Router>
               <nav>
        <h2>Shopify</h2>
        <section id='cart'>
               <Link onMouseOver={() => setmsg('View Cart')} onMouseOut={() => setmsg('')} to={'/Cart'}> <span className="material-symbols-outlined">
shopping_cart {localStorage.getItem('Count')}
</span></Link>
  <span>{msg}</span>
        </section>
      <button onClick={() => changebg(! bg)}>{(bg) ? 'Light' : 'Dark'}</button>
       </nav>
      <Routes>
        <Route
          path="/index"
          element={<Products addtocart ={callback} />}
        />
       <Route path="/Cart" element={<Cart />}/>
         <Route path="/Payment" element={<Payment />}/>
      </Routes>
    </Router>
   </GlobalContext.Provider>
  );
};

export default App