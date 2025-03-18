import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  
    return (
      <nav className='shadow-sm sticky top-0 left-0 z-50 bg-gradient-to-r from-violet-700 to-violet-300'>
      <div className='flex h-[80px] items-center mx-auto max-w-7xl px-3 '>
      <div className='flex items-center gap-2 font-weight-bold text-2xl text-white font-monospace'>
        <Logo />
      </div>
      <div className="flex space-x-6 ml-auto">
      <Link href="/" className="relative group text-white text-lg">
        Home
         <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </Link>
      <Link href="/about" className="relative group text-white text-lg">
         About
        <span className="text-lg absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </Link>
      <Link href="/services" className="relative group text-white text-lg">
         Services
        <span className="text-lg absolute left-0 bottom-0 w-full h-0.5  bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </Link>
      <Link href="/contact" className="relative group text-white text-lg">
        Contact
        <span className="text-lg absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </Link>
    </div>

      <div className="flex flex-wrap justify-center mx-4">
			<button className="px-8 py-3 m-2 text-lg border rounded text-white dark:border-white-300 hover:bg-white hover:text-black">Login</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-black bg-white text-black dark:border-black-300 hover:bg-black hover:text-white">Register</button>
		  </div>
      </div>
    </nav>
  )
}
export default Navbar;