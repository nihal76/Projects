import React from "react";
function Products({image,brand = 'puma' ,desc,price,rating}){
   const styleObj = {
     backgroundColor: "#e3f6f5",
     fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`,
   };

   function addToCart(event){
       alert(`added ${desc} to cart`)
   }

   return (
     <div
       className="product"
      //  internal style
      //  style={{
      //    backgroundColor: "#e3f6f5",
      //    fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`,
      //  }}
      // internal style using js objects
      style={styleObj}
     >
       <a href="">
         <img src={image} />
       </a>
       <h3>{brand}</h3>
       <p>{desc}</p>
       <h4>{price}</h4>
       <h4>{rating}</h4>
       <button onClick={addToCart}>Add to cart</button>
     </div>
   );
}
export default Products;