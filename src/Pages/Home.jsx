import React, { useState } from 'react';
import ShinyText from '../components/ShinyText';
import CircularTiles from '../components/CircularTiles';
import Tiles from '../components/Tiles';
import Squares from '../components/Squares';

function Home() {
  const [igLink] = useState('https://www.instagram.com/luv2lag/');
  const [linkedinLink] = useState('https://www.linkedin.com/in/amitoshdeep/');
  const [ytLink] = useState('https://www.youtube.com/@lowkeylazyy');
  const [playlistLink] = useState(
    'https://music.youtube.com/playlist?list=PLjceNjMRpeAKbd-ADwTBNzNBEy-6lQWA2&si=iV68snSw-NgA7Dwv'
  );
  const [githubLink] = useState('https://github.com/Amitoshdeep');
  const [portfolioLink] = useState('https://amitx.netlify.app');

  const [contact, setContact] = useState(true);

  return (
    <>
      {/* Background Squares */}
      <div className="w-full h-full absolute top-0 left-0 bg-black pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative min-h-[100dvh] text-white flex flex-col gap-3 justify-center items-center p-4 md:p-0 z-10">

        {/* Profile Image */}
        <div className="h-32 aspect-square overflow-hidden rounded-full border-8 border-white30 backdrop-blur-3xl">
          <img
            src="/assets/pfp.jpg"
            alt="Profile"
            className="object-cover hover:scale-[1.1] duration-300"
          />
        </div>

        {/* Name */}
        <div className="p-4 border-[#00000040] hover:bg-[#00000050] rounded-4xl backdrop-blur-2xl duration-300">
          <ShinyText
            text="@Amitoshdeep Singh"
            disabled={false}
            speed={3}
            className="custom-class font-bold text-lg md:text-xl font-fugaz text-white40"
          />
        </div>

        {/* Social Links */}
        <div className="h-10 gap-3 text-2xl flex text-white40">
          <CircularTiles lg={<i className="fi fi-brands-linkedin lg"></i>} lnk={linkedinLink} />
          <CircularTiles lg={<i className="fi fi-brands-github lg"></i>} lnk={githubLink} />
          <CircularTiles lg={<i className="fi fi-brands-youtube lg"></i>} lnk={ytLink} />
        </div>

        {/* Tiles Section */}
        <div className="flex flex-col items-center justify-center md:max-w-1/2 lg:max-w-1/3 w-full gap-4 pt-8">
          <Tiles nm="My Devfolio" lnk={portfolioLink} />
          <Tiles nm="Instagram" lnk={igLink} />
          <Tiles nm="Youtube Playlist" lnk={playlistLink} />

          {/* Contact Section */}
          <div className="font-bold font-poppins text-sm flex justify-evenly w-full overflow-hidden relative">
            <p
              className={`p-4 backdrop-blur-2xl rounded-4xl absolute z-20 flex items-center gap-4 duration-300 ${
                contact ? 'translate-y-[150px]' : 'translate-y-0'
              }`}
            >
              <span
                className="hover:underline cursor-pointer duration-300"
                onClick={() =>
                  (window.location.href = 'mailto:amitosh.dev@outlook.com')
                }
              >
                amitosh.dev@outlook.com
              </span>
              <i
                className="fi fi-br-cross-small flex text-xl cursor-pointer"
                onClick={() => setContact(!contact)}
              ></i>
            </p>

            <p
              className="p-4 backdrop-blur-2xl rounded-4xl cursor-pointer"
              onClick={() => setContact(!contact)}
            >
              CONTACT ME
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
