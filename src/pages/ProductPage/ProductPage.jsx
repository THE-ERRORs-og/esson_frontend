import React from 'react'
import Corousel from './Components/Corousel'
import CoroselSideBar from './Components/CoroselSideBar'
import AboutProduct from './Components/AboutProduct'

const ProductPage = () => {
  return (
    <div>
      <div className='flex '>
        <div className='w-[100%]'>
          <Corousel className="w-[60%]"/>
          <AboutProduct />
        </div>
        <CoroselSideBar className=""/>
      </div>
      

    </div>
  )
}

export default ProductPage
