import React from 'react'
import { Heart, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          <Link to="" className="hover:text-black transition">Home</Link>
          <Link to="" className="hover:text-black transition">Shop</Link>
          <Link to="" className="hover:text-black transition">Contact Us</Link>
          <Link to="" className="hover:text-black transition">About Us</Link>
        </nav>

        {/* Logo */}
        <div className="text-3xl font-light tracking-[6px]">
          URBANTICK
        </div>

        {/* Icons */}
        {/* <div className="flex items-center gap-5">
          <Heart
            size={20}
            className="cursor-pointer hover:scale-110 transition"
          />
          <User
            size={20}
            className="cursor-pointer hover:scale-110 transition"
          />
          <ShoppingCart
            size={20}
            className="cursor-pointer hover:scale-110 transition"
          />
        </div> */}
        <div className="flex items-center gap-10">
            <ShoppingCart
              className="cursor-pointer hover:scale-110 transition hover:text-blue-900" 
            />
            <Heart
              className="cursor-pointer hover:scale-110 transition hover:text-blue-900"
            />
            <User
              className="cursor-pointer hover:scale-110 transition hover:text-blue-900"
            />
        </div>
      </div>
    </header>
  )
}

export default Header