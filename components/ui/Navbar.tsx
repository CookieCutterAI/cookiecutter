'use client'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='absolute z-50'>

      <nav className="h-[5em] w-[50em] bg-[#bfbdbd] rounded-[50em] relative top-6"> 
        <ul className="flex flex-row gap-5 text-3xl">
          <li><Image src="/logo-dark-removebg-preview.png" className="w-36 h-36 rounded-full" alt="logo" width={100} height={100}/></li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Login</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
