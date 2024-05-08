import React from 'react'

export const Cards = () => {
  return (
    <div className='w-[16rem] flex flex-col items-start justify-center bg-gray-200 text-black rounded-xl m-2'>
      <div className="imgHouse w-full h-[15rem] bg-blue-400 rounded-xl">Imagen</div>
      <div className="info flex flex-col items-start justify-start p-2">
        <p>Name rent</p>
        <div className="flex items-center justify-center gap-2">
          {/* <span className='material-icons'>my_location</span> */}
          <span className='material-icons'>location_on</span>
          <p>Address Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <p>Price $$</p>
      </div>
    </div>
  )
}
