import React from 'react'
import Link from 'next/link'
import ProductItem from './ProductItem'

const Product = () => {
  return (
    <>
      <ProductItem model='Model Y' bgImg='bg-model-y' btn='Custom Order' link='/modely' />
      <ProductItem model='Model S' subtitle='Schedule a Demo Drive' bgImg='bg-model-s' btn='Custom Order' link='/models' />
      <ProductItem model='Model X' subtitle='Schedule a Demo Drive' bgImg='bg-model-x' btn='Custom Order' link='/modelx' />
      <ProductItem model='Solar and Powerwall' subtitle='Power Everything' bgImg='bg-solar-and-powerwall' btn='Learn More' secondBtn="hidden" link='/powerwall' />
      <ProductItem model='Accessories' bgImg='bg-accessories' btn='Shop Now' secondBtn="hidden" link='/' />
    </>
  )
}

export default Product
