import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
   <nav class="topnav">
   <a><Link to='/Home'>Home</Link></a>
   <a><Link to='/About'>About</Link></a>
     <a><Link to='/Contact'>Contact</Link></a>
</nav>
  )
}