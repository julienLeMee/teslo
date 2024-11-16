import React, { useState } from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { GrLanguage } from 'react-icons/gr'

const Navbar = ({ position = 'fixed', textColor, logoColor }) => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
    {nav && (
      <div
        className="fixed z-40 top-0 left-0 w-full h-full bg-black/30 bg-opacity-50 backdrop-blur-sm"
        onClick={handleNav}
      />
    )}
      <div className={`text-white w-full flex items-center justify-between py-4 px-8 ${position} ${textColor} font-medium z-[50]`}>
        <Link href='/'>
          <Image
            src={logo}
            width={80}
            height='auto'
            alt='logo'
            className={`cursor-pointer object-cover mx-4 my-2 ${logoColor} invert`}
            priority
          />
        </Link>

        <div>
          <ul className='tracking-wide text-sm hidden sm:flex'>
            <li className='h-full my-auto cursor-pointer hover:bg-black/50 duration-300 pt-2 rounded font-normal'>
              <Link
                className='p-4'
                href='/werobot'>We, Robot
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/50 duration-300 pt-2 rounded font-normal'>
              <Link
                className='p-4'
                href='/models'>Model S
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/50 duration-300 pt-2 rounded font-normal'>
              <Link
                className='p-4'
                href='/modelx'>Model X
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/50 duration-300 pt-2 rounded font-normal'>
              <Link
                className='p-4'
                href='/cybertruck'>Cybertruck
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className='tracking-wide text-sm hidden sm:flex'>
            <li onClick={handleNav} className='h-full text-center my-auto cursor-pointer hover:bg-black/50 duration-300 pt-2 rounded font-normal'>
              <span
                className='p-4'>
                  Menu
              </span>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
      <div onClick={handleNav} className='sm:hidden z-10'>
        {nav ? <AiOutlineClose size={20} style={{color: 'white'}} className='hover:cursor-pointer' /> : <AiOutlineMenu size={20} style={{color: 'white'}} className='hover:cursor-pointer' />}
      </div>
      {/* Mobile Menu */}
      <div className={ nav ? 'absolute top-0 right-0 bottom-0 flex flex-col justify-between py-10 items-center w-full md:w-[35%] lg:w-[22%] h-screen bg-white ease-in duration-500' : 'absolute top-0 right-[-100%] bottom-0 hidden flex-col justify-between py-10 items-center w-full lg:w-[22%] h-screen bg-white ease-in duration-500'}>
        <div className="w-[80%] flex justify-end">
          <AiOutlineClose onClick={handleNav} size={40} style={{color: 'black'}} className='hover:cursor-pointer text-black/80 hover:bg-black/10 rounded p-2 duration-300' />
        </div>
        <div className="w-[80%] h-full flex flex-col justify-center">
          <ul className='w-full'>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Accueil</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Notre histoire</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Nos produits</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Blog</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Contact</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Accueil</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Notre histoire</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Nos produits</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Blog</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Contact</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Nos produits</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm' duration-300>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Blog</Link>
            </li>
            <li onClick={handleNav} className='text-black/80 hover:bg-black/10 rounded pl-2 p-1 text-sm duration-300'>
              <Link className='flex items-center cursor-pointer pt-2' href='/'>Contact</Link>
            </li>
          </ul>
          <div className="p-1 flex items-center text-black/80 hover:bg-black/10 rounded pl-2">
            <GrLanguage size={20} style={{color: 'black'}} className='hover:cursor-pointer mr-2' />
            <p className='pt-2 text-sm'>Canada</p>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Navbar
