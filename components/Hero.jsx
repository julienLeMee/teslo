import Link from 'next/link'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const Hero = () => {

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <>
      <div className="w-full h-screen bg-hero text-[#181A1F]">
        <div className="flex flex-col justify-between h-full py-10">
          <h1 className="text-white text-4xl tracking-wider font-medium text-center pt-20">Model 3</h1>

          <div className="flex flex-col">
            <div className="w-full md:w-[40%] max-w-[90%] mx-auto flex items-center justify-center py-4">
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <Link
                  href='/model3'
                  className="bg-black/70 mr-2 w-full mx-auto text-center m-2 my-2 md:my-0 rounded text-white text-sm h-full cursor-pointer">
                  <span className='py-1 mt-2 flex items-center justify-center h-full my-auto'>
                    Custom Order
                  </span>
                </Link>
                <Link
                  href='/model3'
                  className="bg-white/80 w-full mx-auto text-center m-2 my-2 md:my-0 rounded text-[#181A1F] text-sm h-full cursor-pointer">
                  <span className='py-1 mt-2 flex items-center justify-center h-full my-auto'>
                    Demo Drive
                  </span>
                </Link>
              </div>
            </div>

            <BsChevronDown
              onClick={handleScroll}
              className='text-xl animate-bounce text-center w-10 mx-auto cursor-pointer'
            />

          </div>

        </div>
      </div>
    </>
  )
}

export default Hero
