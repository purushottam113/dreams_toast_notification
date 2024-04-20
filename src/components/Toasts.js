import React, { useEffect, useState } from 'react'

const Toasts = ({message = "Testing", countDown = 7, click= "1"}) => {
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsVisible(false)
    },countDown*1000)

    return () => { clearTimeout(timer) }

  },[isVisible])

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div key={click} className={isVisible?"bg-green-400 flex justify-around round-sm p-2 m-2 gap-6 w-40": "round-sm p-2 m-2 gap-6 w-40 hidden"}>
      <h1 onMouseOver={handleMouseOver}
      >{message} : {click}</h1>
      <button className="hover:bg-zinc-50 rounded-full"
              onClick={handleClose}
      >❌</button>
    </div>
  )
}

export default Toasts
