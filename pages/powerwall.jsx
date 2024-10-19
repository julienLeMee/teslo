import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { SlEnergy } from 'react-icons/sl'
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md'
import Footer from '@/components/Footer'

const powerwall = () => {
  return (
    <>
      <Navbar
        position='absolute'
        textColor={'text-[#ffffff]'}
        logoColor={'invert'}
      />
      <div className="w-full h-screen bg-model-powerwall-details">
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col">
            <h1 className="text-4xl text-white tracking-wider font-medium text-center pt-20">Powerwall</h1>
          </div>
            <div className="w-full md:w-[70%] h-32 lg:w-[55%] max-w-[90%] mx-auto flex justify-center items-center text-white">
              <div className="flex flex-col md:flex-row w-full items-center justify-around">
                <ul className='flex w-full items-center justify-around'>
                  <div className="flex flex-col items-center justify-center">
                    <SlEnergy className="text-base md:text-lg lg:text-4xl font-medium text-center h-full pb-2" />
                    <p className='text-xs py-1'>Store Energy</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <li className="text-base md:text-lg lg:text-3xl font-medium text-center h-full pt-3">24/7</li>
                    <p className='text-xs py-1'>Backup Protection</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <MdOutlineEnergySavingsLeaf className="text-base md:text-lg lg:text-4xl font-medium text-center h-full pb-2" />
                    <p className='text-xs py-1'>Power Your Home</p>
                  </div>
                </ul>
                <Link
                  href='/'
                  className="hover:bg-white/90 hover:text-black mr-2 w-full md:w-[250px] mx-auto text-center m-2 my-2 md:my-0 rounded text-white text-sm h-full cursor-pointer border-4 duration-300">
                  <span className='text-center mt-2 flex items-center justify-center h-full my-auto'>
                    Get Updates
                  </span>
                </Link>
              </div>
            </div>
        </div>
      </div>
      <h1 className='bg-black py-16 w-full mx-auto text-center text-3xl -tracking-wide text-white flex items-center justify-center'>Interior of the future</h1>
      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-3-Desktop-ROW.png" alt="interior car" className="w-full h-screen object-cover"/>
      <Footer />
    </>
  )
}

export default powerwall
