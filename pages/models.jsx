import Navbar from '@/components/Navbar'
import ModelItem from '@/components/ModelItem'
import React from 'react'

const models = () => {
  return (
    <>
      <Navbar
        position='absolute'
        textColor={'text-[#ffffff]'}
        logoColor={'invert'}
      />
      <ModelItem
        textColor='text-white'
        model='Model S'
        subtitle='Plaid'
        bgImg='bg-model-s-details'
        btn='View Inventory'
        km='637'
        s='2.1'
        speed='322'
        hp='1,020'
      />
    </>
  )
}

export default models
