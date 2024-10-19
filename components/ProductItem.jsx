import React from 'react'
import Link from 'next/link'

const ProductItem = ( { model, subtitle, bgImg, btn, secondBtn, link } ) => {
  return (
    <>
      <div className={`w-full h-screen ${bgImg} text-[#181A1F]`}>
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col">
            <h1 className="text-white text-4xl tracking-wider font-medium text-center pt-20">{model}</h1>
            <Link href={`${link}`}>
              <p className="text-white text-center text-sm underline">{subtitle}</p>
            </Link>
          </div>
            <div className="w-full md:w-[40%] max-w-[90%] mx-auto flex items-center justify-center py-4">
              <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto">
                <Link
                  href={`${link}`}
                  className="bg-black/70 mr-2 w-full mx-auto text-center m-2 my-2 md:my-0 rounded text-white text-sm h-full cursor-pointer">
                  <span className='py-1 mt-2 flex items-center justify-center h-full my-auto'>
                    {btn}
                  </span>
                </Link>
                <Link
                  href={`${link}`}
                  className={`${secondBtn} bg-white/80 w-full mx-auto text-center m-2 my-2 md:my-0 rounded text-[#181A1F] text-sm h-full cursor-pointer`}>
                  <span className='py-1 mt-2 flex items-center justify-center h-full my-auto'>
                    Demo Drive
                  </span>
                </Link>
              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default ProductItem
