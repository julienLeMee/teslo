import React, { useState } from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <div className="w-full flex items-center justify-between py-4 px-8 fixed text-black/80 font-medium z-[50]">
        <Link href='/'>
          <Image
            src={logo}
            width={80}
            height='auto'
            alt='logo'
            className='cursor-pointer object-cover mx-4 my-2'
            priority
          />
        </Link>

        <div>
          <ul className='tracking-wide text-sm hidden sm:flex'>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-4'
                href='/'>Model S
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-4'
                href='/'>Model 3
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-4'
                href='/'>Model X
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-4'
                href='/'>Model Y
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-4'
                href='/'>Cybertruck
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-4'
                href='/'>Powerwall
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className='tracking-wide text-sm hidden sm:flex'>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-4'
                href='/'>Shop
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-4'
                href='/'>Account
              </Link>
            </li>
            <li onClick={handleNav} className='h-full text-center my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <span
                className='p-4'>
                  Menu
              </span>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
      <div onClick={handleNav} className='sm:hidden z-10'>
        {nav ? <AiOutlineClose size={20} style={{color: 'white'}} className='hover:cursor-pointer' /> : <AiOutlineMenu size={20} style={{color: 'black'}} className='hover:cursor-pointer' />}
      </div>
      {/* Mobile Menu */}
      <div className={ nav ? 'absolute top-0 right-0 bottom-0 flex flex-col justify-evenly py-10 items-center w-full lg:w-[20%] h-screen bg-white ease-in duration-500' : 'absolute top-0 right-[-100%] bottom-0 flex flex-col justify-evenly py-10 items-center w-full lg:w-[20%] h-screen bg-black text-center ease-in duration-500'}>
        <AiOutlineClose onClick={handleNav} size={20} style={{color: 'black'}} className='hover:cursor-pointer' />
        <ul>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/'>Accueil</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/histoire'>Notre histoire</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/produits'>Nos produits</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/'>Accueil</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/histoire'>Notre histoire</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/produits'>Nos produits</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/produits'>Nos produits</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li onClick={handleNav} className='text-black/80 hover:text-black/60 cursor- py-2 text-sm'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      </div>
    </>
  )
}

export default Navbar
