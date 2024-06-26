import React, { useState } from 'react'

const CountriesData = ({countries}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5;

    const totalPages = Math.ceil(countries.length / itemsPerPage);
    const startIndex = (currentPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCountries = countries.slice(startIndex, endIndex)

  return countries==0? <h1>Data Fetching.....</h1> : (
        <div className= "w-96">
            <div className="flex justify-center">
            <ul className='h-56 mt-10 '>
                {currentCountries.map(country => (
                    <li className='' key={country?.country_id}>{country.country_name}</li>
                ))}
            </ul>
            </div>

            <div className="flex justify-center">
                <button
                    className='p-2 w-28 mx-2 bg-blue-400'
                    onClick={()=> setCurrentPage(prePage => Math.max(prePage-1, 1))}
                    > Previous
                </button>
                <button
                    className='p-2 w-28 mx-2 bg-blue-400'
                    onClick={()=> setCurrentPage(prePage => Math.min(prePage+1, totalPages))}
                    > Next
                </button>
            </div>          
        </div>
  )
}

export default CountriesData
