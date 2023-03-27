import Navbar from '@/components/Navbar'
import ModelItem from '@/components/ModelItem'
import React from 'react'

const modelx = () => {
  return (
    <>
      <Navbar position='absolute' />
      <ModelItem
        textColor='text-[#181A1F]'
        model='Model X'
        subtitle='Plaid'
        bgImg='bg-model-x-details'
        btn='View Inventory'
        km='536'
        s='2.6'
        speed='250'
        hp='1,020'
      />
    </>
  )
}

export default modelx
