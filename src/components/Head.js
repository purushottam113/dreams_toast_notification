import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className='bg-red-500 flex content-between justify-between h-16 px-2 text-white'>
      <h1 className='text-2xl my-auto'>Heading</h1>
      <div className="flex gap-2 content-center">
      <Link to="/"><h1 className='hover:bg-red-600 px-2 m-2 rounded-sm'>First Component</h1></Link>
      <Link to="/component2"><h1 className='hover:bg-red-600 px-2 m-2 rounded-sm'>Second Component</h1></Link>
      <Link to="/component3"><h1 className='hover:bg-red-600 px-2 m-2 rounded-sm'>Third Component</h1></Link>
      </div>
    </div>
  )
}

export default Head
