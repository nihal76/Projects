import React from "react";
import ReactDOM from "react-dom";
import {App} from './App'
import Msg from './Msg'
import Header from "./Header";
// ways of creating root element

const element = <h1 className="greeting">React, JS!</h1>;

// ReactDOM.createRoot(document.getElementById('root')).render(React.createElement('h1',{className : 'heading'}, "React JS"));

function display(){
  return (
    <h3>Keep Learning, Keep exploring!</h3>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    {element}
    <Msg />
    <p>Easy to learn</p>
    spend {2 + 1} hours daily to learn <br />
    {/* <button onClick={display()}>Click Me</button> */}
    <App />
  </>
);





