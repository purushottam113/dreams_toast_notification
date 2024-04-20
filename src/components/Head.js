import React from 'react'

const Head = () => {
  return (
    <div className='bg-red-500 flex content-between justify-between h-12 px-2 text-white'>
      <h1 className='text-2xl my-auto'>Heading</h1>
      <div className="flex gap-2">
      <button className='hover:bg-red-600 px-2'>First Component</button>
      <button>Second Component</button>
      <button>Third Component</button>
      </div>
    </div>
  )
}

export default Head
