import React from 'react'
import ShinyText from './ShinyText';


function Tiles({nm = '', lnk=''}) {
  return (
    <div className='group font-bold cursor-pointer text-lg md:text-2xl p-4 backdrop-blur-sm bg-[#00000030] rounded-4xl w-full text-center' onClick={()=>window.open(`${lnk}`)}>
      <ShinyText
        text={nm}
        disabled={false}
        speed={5}
        className='custom-class font-poppins text-[#ffffff90] group-hover:text-white duration-300'

      />
    </div>
  )
}

export default Tiles;
