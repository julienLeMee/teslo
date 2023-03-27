import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
// import { cybertruckLogo } from '../public/cybertruck-logo.svg'

const cybertruck = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-model-cybertruck-details">
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col">
            <img src='../public/cybertruck-logo.svg' alt="Cybertruck Logo" className="w-20 h-20 mx-auto" />
            <p className="text-center text-xs tracking-wide">BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR</p>
          </div>
            <div className="w-full h-32 md:w-[50%] max-w-[90%] mx-auto flex justify-center text-white">
              <div className="flex flex-col w-full items-center justify-around">
                <div className="w-[50%] flex flex-col md:flex-row items-center justify-center mx-auto">
                  <Link
                    href='/'
                    className="hover:bg-white/90 hover:text-black mr-2 w-full mx-auto text-center m-2 my-2 md:my-0 rounded text-white text-sm h-full cursor-pointer border-4 duration-300">
                    <span className='py-1 mt-1 flex items-center justify-center h-full my-auto'>
                      Order Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default cybertruck
