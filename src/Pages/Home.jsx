import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Particles from '../components/Particles';
import SplashCursor from '../components/SplashCursor'
import ShinyText from '../components/ShinyText';

// import '../index.css';
import CircularTiles from '../components/CircularTiles';
import Tiles from '../components/Tiles';
import StarBorder from '../components/StarBorder';
import Aurora from '../components/Aurora';

function Home() {
  const [igLink] = useState(`https://www.instagram.com/luv2lag/`);
  const [LinkedinLink] = useState(`https://www.linkedin.com/in/amitoshdeep/`);
  const [YtLink] = useState(`https://www.youtube.com/@Luv2Lag`);
  const [PlaylistLink] = useState(`https://music.youtube.com/playlist?list=PLjceNjMRpeAKbd-ADwTBNzNBEy-6lQWA2&si=iV68snSw-NgA7Dwv`);
  const [GithubLink] = useState(`https://github.com/Amitoshdeep`);
  const [PortfolioLink] = useState(`https://amitx.netlify.app`);

  return (
    <>
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

      {/* Scrollable foreground content */}
      <div className="relative z-10 min-h-[100dvh] text-white flex flex-col gap-3 justify-center items-center p-4 md:p-0">

        {/* IMAGE PFP ... GONNA CHANGE IN FUTURE*/}
        <div className='h-32 aspect-square overflow-hidden rounded-full border-8 border-white30 backdrop-blur-3xl'>
          <img src="/assets/pfp.jpg" alt="" className='object-cover hover:scale-[1.1] duration-300' />
        </div>

        {/* NAME */}
        <div className='p-4 border-[#00000040] hover:bg-[#00000050] rounded-4xl backdrop-blur-2xl duration-300'>
          <ShinyText
            text="@Amitoshdeep Singh"
            disabled={false}
            speed={3} // less is fast
            className='custom-class font-bold text-lg md:text-xl font-fugaz text-white40'
          />
        </div>

        {/* SOCIAL LINKS */}
        <div className='h-10 gap-3 text-2xl flex  text-white40'>

          <CircularTiles
            lg={<i class="fi fi-brands-linkedin lg"></i>}
            lnk={LinkedinLink}
          />

          <CircularTiles
            lg={<i class="fi fi-brands-github lg"></i>}
            lnk={GithubLink}
          />

          <CircularTiles
            lg={<i class="fi fi-brands-youtube lg"></i>}
            lnk={YtLink}
          />

        </div>

        {/* Tiles */}
        <div className='flex flex-col items-center justify-center md:max-w-1/2 lg:max-w-1/3 w-full gap-4 pt-8 '>

          {/* <StarBorder> */}

          <Tiles
            nm='My Devfolio'
            lnk={PortfolioLink}
            />
          {/* </StarBorder> */}

          {/* <StarBorder> */}
            <Tiles
              nm='Instagram'
              lnk={igLink}
            />
          {/* </StarBorder> */}

          {/* <StarBorder> */}

            <Tiles
              nm='Youtube Playlist'
              lnk={PlaylistLink}
            />
          {/* </StarBorder> */}

        </div>


      </div>
    </>
  )
}

export default Home
