import React from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className="w-full flex items-center justify-between py-4 px-8 fixed text-black/80 font-medium">
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
        <ul className='flex tracking-wide text-sm'>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/'>Model S
            </Link>
          </li>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/about'>Model 3
            </Link>
          </li>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/contact'>Model X
            </Link>
          </li>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/contact'>Model Y
            </Link>
          </li>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/contact'>Cybertruck
            </Link>
          </li>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/contact'>Powerwall
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className='flex tracking-wide text-sm'>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/'>Shop
            </Link>
          </li>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/about'>Account
            </Link>
          </li>
          <li className='h-full ml-2 my-auto'>
            <Link
              className='mr-4'
              href='/contact'>Menu
            </Link>
            </li>
        </ul>
      </div>

    </div>
    </>
  )
}

export default Navbar
