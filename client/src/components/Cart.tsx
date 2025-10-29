import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className="pt-36 pb-20 container mx-auto px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Cart</h1>
        <p className="text-xl text-gray-300 mb-8">
          Your cart is currently empty.
        </p>
        <Link
          to="/"
          className="py-3 px-6 bg-primary-custom text-black rounded-md hover:bg-opacity-90 transition-colors font-medium text-lg"
        >
          Start Browsing
        </Link>
      </div>
    </div>
  )
}

export default Cart