import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full py-4 px-8 text-black/80 z-[100]">
        <div>
          <ul className='tracking-wide text-sm hidden sm:flex'>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-2 text-xs'
                href='/'>Tesla 2023
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-2 text-xs'
                href='/'>Privacy & Legal
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-2 text-xs'
                href='/'>Vehicle recalls
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-2 text-xs'
                href='/'>Contact
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-2 text-xs'
                href='/'>Careers
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-2 text-xs'
                href='/'>News
              </Link>
            </li>
            <li className='h-full my-auto cursor-pointer hover:bg-black/10 duration-300 pt-2 rounded'>
              <Link
                className='p-2 text-xs'
                href='/'>Locations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
