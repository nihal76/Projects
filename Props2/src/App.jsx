// App.js
import React from "react";
import BoxComponent from "./BoxComponent";


export default function App() {

const childToRender = (
  <>
    <div>
      <p>This is children props from App</p>
      <p>Another paragraph</p>
    </div>
    <div>
      <p>Paragraph 2</p>
    </div>
  </>
);

const Render = 
<>
<h2>heading</h2>
<p>Paragraph</p>
</>
     
  return (
    <BoxComponent value="this is props from App component">
      childToRender={childToRender}
      childToRender2 = {Render}
    </BoxComponent>
  );
}
