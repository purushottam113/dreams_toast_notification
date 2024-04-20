import React from 'react'

const Component2 = () => {
  return (
    <div>
        <h1 className="text-2xl">Enter custom toast text</h1>
        <div className="my-2">
            <input className='border p-2 rounded-lg text-white m-2 w-96'/>
            <button className="bg-slate-200 hover:bg-slate-300 p-2 rounded-lg">🛠️</button>
        </div>
        <button className='bg-blue-400 hover:bg-blue-500 p-2 rounded-lg text-white m-2'>Show toast message</button>
    </div>
  )
}

export default Component2
