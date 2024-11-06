import React from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
    return (
        <div className='bg-white dark:bg-darkGray flex flex-row justify-between w-full py-5 px-5'>
            <p className='pl-2 lg:pl-8 font-bold text-[1rem] lg:text-[1.5rem]'>Where in the world?</p>
            <ThemeToggle />
           
        </div>
    )
}

export default Navbar
