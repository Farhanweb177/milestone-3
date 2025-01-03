import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-orange-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 font-extrabold text-3xl text-yellow-700">Milestone <span className='text-blue-700'>Three</span></span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={""} className="mr-5 font-extrabold text-orange-800 hover:text-gray-900">Home</Link>
      <Link href={"/component/p"} className="mr-5 font-extrabold text-orange-800 hover:text-gray-900">Blog</Link>
      <Link href={""} className="mr-5 font-extrabold text-orange-800 hover:text-gray-900">About</Link>
      <Link href={""} className="mr-5 font-extrabold text-orange-800 hover:text-gray-900">Serveces</Link>
      <Link href={""} className="mr-5 font-extrabold text-orange-800 hover:text-gray-900">Contact Us</Link>
    </nav>
    
    
  </div>
</header>

    </div>
  )
}

export default Header
