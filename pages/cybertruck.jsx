import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const cybertruck = () => {
  return (
    <>
      <Navbar
        position='absolute'
        textColor={'text-[#ffffff]'}
        logoColor={'invert'}
      />
      <div className="w-full h-screen bg-model-cybertruck-details">
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col mt-12 max-w-[90%] mx-auto">
            <img src="cybertruck.svg" alt="Cybertruck Logo" className="w-[350px] h-[120px] object-cover mx-auto invert"/>
            <p className="text-white text-center text-xs tracking-wide">BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR</p>
          </div>
            <div className="w-full h-32 md:w-[50%] max-w-[90%] mx-auto flex justify-center text-white">
              <div className="flex flex-col w-full items-center justify-around">
                <div className="w-full md:w-[40%] flex flex-col md:flex-row items-center justify-center mx-auto pt-6">
                  <Link
                    href='/'
                    className="hover:bg-white/90 hover:text-black mr-2 w-full mx-auto text-center m-2 my-2 md:my-0 rounded-t rounded-bl text-white text-sm h-full cursor-pointer border-4 duration-300">
                    <span className='py-1 mt-1 flex items-center justify-center h-full my-auto'>
                      Order Now
                    </span>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
      <h1 className='bg-black py-16 w-full mx-auto text-center text-3xl -tracking-wide text-white flex items-center justify-center'>Built for any planet</h1>
      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-End-of-Page-Desktop-v2.png"/>
      <Footer />
    </>
  )
}

export default cybertruck
