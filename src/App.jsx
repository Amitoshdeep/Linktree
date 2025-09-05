import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import SplashCursor from './components/SplashCursor'

import './index.css';
import Aurora from './components/Aurora';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
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
