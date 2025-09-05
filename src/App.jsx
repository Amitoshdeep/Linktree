import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Particles from './components/Particles';
import SplashCursor from './components/SplashCursor'
import ShinyText from './components/ShinyText';

import './index.css';
import CircularTiles from './components/CircularTiles';
import Tiles from './components/Tiles';
import StarBorder from './components/StarBorder';
import Aurora from './components/Aurora';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </>
  )
}

export default App;
