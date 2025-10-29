import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-dark-custom fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link className="text-2xl font-bold text-white" to="/">DrawKit</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Cart</Link>
            <div className="pl-4">
              <Link
                to="/login"
                className="py-2 px-4 border border-gray-600 text-gray-300 rounded hover:bg-gray-700 transition-colors text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="ml-2 py-2 px-4 bg-primary-custom text-black rounded hover:bg-opacity-90 transition-colors text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <Link to="/" className="block py-2 text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="block py-2 text-gray-300 hover:text-white">About Us</Link>
          <Link to="/contact" className="block py-2 text-gray-300 hover:text-white">Contact</Link>
          <Link to="/cart" className="block py-2 text-gray-300 hover:text-white">Cart</Link>
          <div className="flex flex-col space-y-2 mt-4">
            <Link
              to="/login"
              className="py-2 px-4 border border-gray-600 text-gray-300 rounded hover:bg-gray-700 transition-colors text-center"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="py-2 px-4 bg-primary-custom text-black rounded hover:bg-opacity-90 transition-colors text-center font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;