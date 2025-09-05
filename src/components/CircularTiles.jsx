import React from 'react'

function CircularTiles({lg = '', lnk =''}) {
  return (
    <>
      <div
        className='flex items-center px-3 py-6 rounded-full backdrop-blur-2xl group cursor-pointer hover:bg-[#00000060]'
        onClick={()=>window.open(`${lnk}`)}
      >
        {lg}
      </div>
    </>

  )
}

export default CircularTiles;
