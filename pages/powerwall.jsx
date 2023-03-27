import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { SlEnergy } from 'react-icons/sl'
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md'

const powerwall = () => {
  return (
    <>
      <Navbar
        textColor={'text-[#ffffff]'}
        logoColor={'invert'}
      />
      <div className="w-full h-screen bg-model-powerwall-details">
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col">
            <h1 className="text-4xl text-white tracking-wider font-medium text-center pt-20">Powerwall</h1>
          </div>
            <div className="w-full h-32 md:w-[50%] max-w-[90%] mx-auto flex justify-center items-center text-white">
              <div className="flex flex-col w-full items-center justify-around">
                <ul className='flex w-full items-center justify-around'>
                  <div className="flex flex-col items-center justify-center">
                    <SlEnergy className="text-xl font-medium text-center h-full" />
                    <p className='text-xs p-2'>Store Energy</p>
                  </div>
                  <div className="flex flex-col">
                    <li className="text-xl font-medium text-center h-full">24/7</li>
                    <p className='text-xs p-2'>Backup Protection</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <MdOutlineEnergySavingsLeaf className="text-xl font-medium text-center h-full" />
                    <p className='text-xs p-2'>Power Your Home</p>
                  </div>
                  <Link
                    href='/'
                    className="hover:bg-white/90 hover:text-black mr-2 w-36 mx-auto text-center m-2 my-2 md:my-0 rounded text-white text-sm h-full cursor-pointer border-4 duration-300">
                    <span className='py-1 mt-1 flex items-center justify-center h-full my-auto'>
                      Get Updates
                    </span>
                  </Link>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default powerwall
