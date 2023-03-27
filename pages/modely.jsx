import Navbar from '@/components/Navbar'
import ModelItem from '@/components/ModelItem'
import React from 'react'

const modely = () => {
  return (
    <>
      <Navbar
        position='absolute'
        textColor={'text-[#ffffff]'}
        logoColor={'invert'}
      />
      <ModelItem
        textColor='text-[#ffffff]'
        model='Model Y'
        bgImg='bg-model-y-details'
        btn='View Inventory'
        km='531'
        s='3.7'
        speed='250'
        hp='486'
      />
    </>
  )
}

export default modely
