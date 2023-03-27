import Navbar from '@/components/Navbar'
import ModelItem from '@/components/ModelItem'
import React from 'react'

const model3 = () => {
  return (
    <>
      <Navbar
        textColor={'text-[#ffffff]'}
        logoColor={'invert'}
      />
      <ModelItem
        textColor='text-[#ffffff]'
        model='Model 3'
        bgImg='bg-model-3-details'
        btn='View Inventory'
        km='576'
        s='3.3'
        speed='261'
        hp='486'
      />
    </>
  )
}

export default model3
