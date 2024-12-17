import React from "react";

function Header(){
  return (
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
  )
}

function Footer(){
  return (
    <nav>
      <p>Footer content</p>
      <li>Nihal Waseem</li>
      <li>Web developer</li>
      <li>Contact - 9108655529</li>
    </nav>
  );
}

export default Header;
export {Footer}