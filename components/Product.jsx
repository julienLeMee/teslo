import React from 'react'
import Link from 'next/link'
import ProductItem from './ProductItem'

const Product = () => {
  return (
    <>
      <ProductItem model='Model Y' bgImg='bg-model-y' btn='Custom Order' />
      <ProductItem model='Model S' bgImg='bg-model-s' btn='Custom Order' />
      <ProductItem model='Model X' bgImg='bg-model-x' btn='Custom Order' />
      <ProductItem model='Solar and Powerwall' bgImg='bg-solar-and-powerwall' btn='Learn More' secondBtn="hidden" />
      <ProductItem model='Accessories' bgImg='bg-accessories' btn='Shop Now' secondBtn="hidden" />
    </>
  )
}

export default Product
