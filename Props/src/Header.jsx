import './App.css'
export default function Header(){
   return (
     <nav>
       <h2>Flipkart</h2>
       <input type="search" name="serach" id="search" placeholder='search for products' />
       <button>Login</button>
       <span class="material-symbols-outlined">shopping_cart</span>
     </nav>
   );
}