"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./globals.css";
import { useTheme } from 'next-themes'
import Navbar from './components/Navbar';
import BasicSearchInput from './components/BasicSearchInput';
import Dropdown from './components/Dropdown';


export default function Home() {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { theme, setTheme } = useTheme()


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get("https://restcountries.com/v3.1/all")
        setCountries(response.data)
      } catch (error) {
        setError(error)
      }
      finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])



  return (

    <div className='bg-ghostWhite dark:bg-darkBlue w-[100%] min-h-screen'>
      <Navbar />
      <div className='flex flex-col items-center w-[100%] lg:flex-row '>
        <BasicSearchInput />
        <div className='mr-auto lg:mx-auto'> <Dropdown /> </div>

      </div>

      <div className=" gap-5 lg:gap-0 lg:gap-y-20 p-5 lg:p-0 w-[100%] h-[100%] grid grid-cols-1 lg:grid-cols-4">

        {countries.map((country) => (
          <div key={`${country.name.official}-${country.alpha3Code}`} className='flex justify-center'>
            <div className=' flex flex-col justify-center items-center w-[100%] lg:w-[250px] lg:h-[300px] h-[400px]'>
              <img
                className=" h-1/2 w-[100%] shadow-md rounded-t-lg bg-no-repeat object-center object-cover"
                src={country.flags.svg}
                alt={country.name.official}
              />

              <div className='shadow-md rounded-b-lg bg-white dark:bg-darkGray  flex flex-col justify-startfont-bold p-5 h-1/2 w-[100%] '> <strong>{country.name.official}</strong>
                <p><strong>Population : </strong>{country.population}</p>
                <p> <strong>Region : </strong>{country.region}</p>
                <p> <strong>Capital : </strong>{country.capital}</p></div>


            </div>
          </div>



        ))}

      </div>
    </div>


  )

}

