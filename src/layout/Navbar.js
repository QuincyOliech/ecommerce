import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex flex-wrap gap-6 items-center justify-between p-10 bg--500'>
        <div className='text-red-600 uppercase text-4xl'>
           <h1>Dev Kenya</h1>
        </div>

        <div>
            <input className='py-1 px-4 bg-gray-200 rounded-lg' type="text" placeholder='Search ...' />
        </div>

        <div className='flex gap-8 text-lg'>
            <a href="">Home</a>
            <a href="">Login</a>
            <a href="">Register</a>
            <a href="/booking">Booking</a>
        </div>
  </nav>
  )
}

export default Navbar