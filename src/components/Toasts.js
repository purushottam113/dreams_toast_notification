import React from 'react'

const Toasts = () => {
  return (
    <div className=' absolute bottom-3 right-2/4 translate-x-2/4'>
        <div className="bg-green-400 flex w-auto justify-around round-sm p-2 m-2 gap-6">
            <h1 className="">Testing: 6</h1>
            <button className="hover:bg-zinc-50 rounded-full">❌</button>
        </div>
    </div>
  )
}

export default Toasts
