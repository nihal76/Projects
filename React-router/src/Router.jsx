import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import App from "./App";
import {Navbar} from './Navbar'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
            <Route path="/Products" element={<App />} />
            <Route path="*" element = {
              <>
                <h1>Page not found 404</h1>
                <p>Go to home page</p>
              </>
            } />
      </Routes>
    </BrowserRouter>
  )
}