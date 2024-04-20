import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import Toasts from './Toasts'
import Component3 from './Component3'
import Head from './Head'

const Body = () => {

  return (
    <>
    <Head/>
    <div className='mt-10 flex justify-center'>
        <Outlet />
        {/* <Component3 /> */}
    </div>
    </>
  )
}

export default Body
