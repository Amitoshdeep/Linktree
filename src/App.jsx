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

            {/* Fixed galaxy background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <SplashCursor />
        {/* <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={300}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={true}
        /> */}

        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />

      </div>

    </>
  )
}

export default App;
