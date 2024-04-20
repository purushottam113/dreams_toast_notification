import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Toasts from './Toasts'

const Body = () => {

  return (
    <div className='mt-10'>
        {/* <Component1 /> */}
        {/* <Component2 /> */}
        <Component3 />
        <Toasts />
    </div>
  )
}

export default Body
