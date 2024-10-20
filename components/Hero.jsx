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
        <div className="flex flex-col justify-center items-start px-8 h-full py-10">
          <h1 className="text-white text-4xl md:text-6xl font-medium font-mono pt-20 text-left">WE,<br /> ROBOT</h1>

          <div className="flex flex-col">
            <div className="w-full mx-auto flex items-center justify-center py-4">
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <Link
                  href='/werobot'
                  className="bg-white hover:bg-white/80 w-full mx-auto text-center m-2 my-2 md:my-0 rounded text-[#181A1F] text-sm h-full cursor-pointer">
                  <span className='px-2 py-1 mt-2 flex items-center justify-center h-full my-auto'>
                    More informations
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
