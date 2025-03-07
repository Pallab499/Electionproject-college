import React from 'react'
import Link from 'next/link'
import SearchBox from './SearchBox'

type Props = {}

export default function ({}: Props) {
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50 bg-gradient-to-r from-pink-500 to-blue-500'>
      <div className='flex h-[80px] items-center mx-auto max-w-7xl px-3 '>
      <div className="flex items-center gap-2">
      <img src="/logo.png" alt="Logo" className="h-12 w-auto rounded-full px-2" />
      </div>
      <p className='flex items-center gap-2 font-weight-bold text-2xl text-white font-serif'> Election Portal </p>
      
      <div className='flex space-x-6 ml-auto'>
        <div>
          <SearchBox />
        </div>
        <Link href="/" className="text-lg font-semibold hover:text-gray-500 text-white">
          Home
        </Link>
        <Link href="/about" className="text-lg hover:text-gray-500 text-white">
          About
        </Link>
        <Link href="/candidates" className="text-lg hover:text-gray-500 text-white">
          Services
        </Link>
        <Link href="/contact" className="text-lg hover:text-gray-500 text-white">
          Contact
        </Link>
      </div>
        </div>

    </nav>
  )
}