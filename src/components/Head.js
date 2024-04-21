import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className='bg-red-500 flex content-between justify-between h-16 px-2 text-white w-screen'>
      <h1 className='sm:text-2xl text-xl'>Dreams</h1>
      <div className="flex gap-2 content-center">
      <Link to="/"><h1 className='hover:bg-red-600 px-2 m-2 rounded-sm text-sm sm:text-lg'>First Component</h1></Link>
      <Link to="/component2"><h1 className='hover:bg-red-600 px-2 m-2 rounded-sm text-sm sm:text-lg'>Second Component</h1></Link>
      <Link to="/component3"><h1 className='hover:bg-red-600 px-2 m-2 rounded-sm text-sm sm:text-lg'>Third Component</h1></Link>
      </div>
    </div>
  )
}

export default Head
