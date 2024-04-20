import React, { useEffect, useState } from 'react'
import Toasts from './Toasts'

const Component2 = () => {

  const [countArr, setCountArr] = useState([])
  const [toastView, setToastView] = useState(false)
  const [timerToast, setTimerToast] = useState(false)
  const [toastCounter, setToastCounter] = useState("7")
  const [message, setMessage] = useState([])
  const [inputText, setInputText] = useState("")
  
  const handleMessage = () => {
    if(inputText !== ""){
    setMessage(prevValues => [...prevValues, inputText]);
    console.log(message)
    setToastView(true)
    setInputText("")}
    else{
      setMessage(prevValues => [...prevValues, "Testing"]);
      setToastView(true)
    }
  }

  return (
    <>
    {!timerToast && <div>
      <h1 className="text-2xl">Enter custom toast text</h1>
      <div className="my-2">
          <input className='border p-2 rounded-lg m-2 w-96'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <button className="bg-slate-200 hover:bg-slate-300 p-2 rounded-lg"
            onClick={()=>setTimerToast(true)}
          >🛠️</button>
      </div>
      <button className='bg-blue-400 hover:bg-blue-500 p-2 rounded-lg text-white m-2'
          onClick={handleMessage}      
      >Show toast message</button>
    </div>}

    {timerToast && <div className='h-40 w-80 p-2 bg-slate-300 rounded-sm backdrop-blur-3xl'>
    <div className="my-2 flex justify-between">
        <h1 className="text-xl">Set Timeout</h1>
        <button className="p-2 rounded-lg"
          onClick={()=> setTimerToast(false)}
        >✖️</button>
    </div>
    <input className='border p-1 rounded-sm m-2 w-60'
      type='number'
      value={toastCounter}
      onChange={e => setToastCounter(e.target.value)}
    />
    <button className='bg-blue-400 hover:bg-blue-500 p-1 rounded-lg text-white m-1'
      onClick={() => setTimerToast(false)}
    >Confirm</button>      
    </div>}

    {toastView && 
    <div className='absolute bottom-3 right-2/4 translate-x-2/4 bg-slate-200 w-44 h-44 flex flex-col-reverse justify-start content-around overflow-hidden'>
    {message.map((msg, index)=>(<Toasts key={index} message={msg} countDown={toastCounter} click = {index} />))}
    </div>
    }
</>
  )
}

export default Component2
