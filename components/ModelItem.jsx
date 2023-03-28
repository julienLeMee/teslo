import React from 'react'
import Link from 'next/link'
import Footer from './Footer'

const ModelItem = ( { textColor, model, subtitle, bgImg, btn, secondBtn, km, s, speed, hp } ) => {
  return (
    <>
      <div className={`w-full h-screen ${bgImg} ${textColor}`}>
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col">
            <h1 className="text-4xl tracking-wider font-medium text-center pt-20">{model}</h1>
            <p className="text-center font-medium">{subtitle}</p>
          </div>
          <div className="w-full h-32 md:w-[50%] max-w-[90%] mx-auto flex justify-center text-white">
            <div className="flex flex-col w-full items-center justify-around">
              <ul className='flex w-full items-center justify-around'>
                <div className="flex flex-col">
                  <li className="text-sm md:text-lg lg:text-xl font-medium text-center h-full">{km} km</li>
                  <p className='text-xs p-2'>Range (EPA est.)</p>
                </div>
                <div className="flex flex-col">
                  <li className="text-sm md:text-lg lg:text-xl font-medium text-center h-full">{s} s</li>
                  <p className='text-xs p-2'>0-100 km/h*</p>
                </div>
                <div className="flex flex-col">
                  <li className="text-sm md:text-lg lg:text-xl font-medium text-center h-full">{speed} km/h</li>
                  <p className='text-xs p-2'>Top Speed†</p>
                </div>
                <div className="flex flex-col">
                  <li className="text-sm md:text-lg lg:text-xl font-medium text-center h-full">{hp} hp</li>
                  <p className='text-xs p-2'>Peak Power</p>
                </div>
              </ul>
              <div className="w-[80%] flex flex-col md:flex-row items-center justify-center mx-auto">
                <Link
                  href='/'
                  className="hover:bg-white/90 hover:text-black mr-2 w-full mx-auto text-center m-2 my-2 md:my-0 rounded text-white text-sm h-full cursor-pointer border-4 duration-300">
                  <span className='py-1 mt-1 flex items-center justify-center h-full my-auto'>
                    {btn}
                  </span>
                </Link>
                <Link
                  href='/'
                  className={`${secondBtn} bg-black/70 hover:bg-[#393C41] mr-2 w-full mx-auto text-center m-2 my-2 md:my-0 rounded text-white text-sm h-full cursor-pointer duration-300`}>
                  <span className='py-1 mt-1 flex items-center justify-center h-full my-auto'>
                    Demo Drive
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='bg-black py-16 w-full mx-auto text-center text-3xl -tracking-wide text-white flex items-center justify-center'>Interior of the future</h1>
      <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2a08bcbc-e536-46d2-a984-d6c8f41ac48f/bvlatuR/std/2880x1800/Model-S-Interior-Hero-Desktop-LHD?quality=auto-medium&amp;format=auto" alt="interior car" className="w-full h-screen object-cover"/>
      <Footer />
    </>
  )
}

export default ModelItem
