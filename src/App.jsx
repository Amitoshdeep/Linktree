import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

import './index.css';
import Home from './Pages/Home';
import Squares from './components/Squares';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>

    </>
  )
}

export default App;
