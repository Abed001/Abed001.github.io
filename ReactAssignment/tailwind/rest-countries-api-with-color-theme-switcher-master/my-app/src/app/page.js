"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./globals.css";
import { useTheme } from 'next-themes'
import Navbar from './components/Navbar';
import BasicSearchInput from './components/BasicSearchInput';

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
      <BasicSearchInput />
      <div className="lg:m-10 gap-5 lg:gap-0 lg:gap-y-20 p-5 lg:p-0 w-[100%] h-[100%] grid grid-cols-1 lg:grid-cols-4">

        {countries.map((country, index) => (


          <div className=' flex flex-col justify-center items-center w-[100%] lg:w-[250px] lg:h-[300px] h-[400px]'>
            <img
              className=" h-1/2 w-[100%] shadow-md rounded-t-lg  bg-no-repeat object-center object-cover"
              src={country.flags.svg}
              alt={country.name.official}
            />

            <div className='shadow-md rounded-b-lg bg-white dark:bg-darkGray  flex justify-center items-center font-bold p-5 h-1/2 w-[100%] '> <p>{country.name.official}</p></div>


          </div>



        ))}

      </div>
    </div>


  )

}

