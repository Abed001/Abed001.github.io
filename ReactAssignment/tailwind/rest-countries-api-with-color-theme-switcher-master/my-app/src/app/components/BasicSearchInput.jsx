import React from 'react'
import { SlMagnifier } from "react-icons/sl";


function BasicSearchInput() {
    return (
        <div className=' w-full flex justify-center items-center'>
            <div className='px-5 lg:px-0 relative flex justify-center lg:justify-start w-[100%] py-10'>
                <span className='absolute left-[7%] lg:left-[5%] top-[40%]'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg></span>


                <input className='shadow-md pl-20 py-4 rounded-lg w-[100%] lg:w-[30%] lg:ml-12 bg-white dark:bg-darkGray' type="search" placeholder="Search for a country.." />

            </div>

        </div>
    )
}

export default BasicSearchInput
