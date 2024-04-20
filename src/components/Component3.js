import React, { useState } from 'react'
import CountriesData from './CountriesData';

const Component3 = () => {
    const [seconds, setSeconds] = useState("");
    const [countries, setCountries] = useState([])
    const [apiLoader, setApiLoader] = useState(true)


    const handleTimeSubmit = () => {
        
        let count = seconds;
        setApiLoader(false)
        const timer = setInterval(()=>{
            count--;

            if(count === 0){
                clearInterval(timer)
                countriesAPI();
            }
        },1000)
    };
    
    const countriesAPI = async () => {
        const data = await fetch("https://api.knowmee.co/api/v1/master/get-country-list");
        const json = await data.json();
        setCountries(json?.responseData);
    }

  return (
    <>
    {apiLoader ?
        <div>
            <h1 className="text-2xl">Enter Countdown Time</h1>
            <input type='number' 
                value={seconds}
                onChange={e => setSeconds(e.target.value)}
            className='border p-1 rounded-lg m-1 w-36'/>
            <button className='bg-blue-400 hover:bg-blue-500 p-1 rounded-lg text-white m-2'
                onClick={handleTimeSubmit}
            >Start Timer
            </button>
        </div> 
        :  
        <CountriesData countries = {countries} />
    }
    </>
  )
}

export default Component3
