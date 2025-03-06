"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Camera } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 !text-white"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Camera className="h-8 w-8 mr-2" />
            <span className="handwriting text-2xl font-bold">Tee_Shotz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors hover:text-gray-600 ${location.pathname === "/" ? "font-semibold" : ""}`}
            >
              Home
            </Link>
            <a href="/#about" className="transition-colors hover:text-gray-600">
              About
            </a>
            <Link
              to="/portfolio"
              className={`transition-colors hover:text-gray-600 ${location.pathname === "/portfolio" ? "font-semibold" : ""}`}
            >
              Portfolio
            </Link>
            <a href="/#reviews" className="transition-colors hover:text-gray-600">
              Reviews
            </a>
            <a href="/#book" className="transition-colors hover:text-gray-600">
              Book
            </a>
            <a href="/#contact" className="transition-colors hover:text-gray-600">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 bg-white" : "max-h-0"}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="py-2 hover:text-gray-600">
            Home
          </Link>
          <a href="/#about" className="py-2 hover:text-gray-600">
            About
          </a>
          <Link to="/portfolio" className="py-2 hover:text-gray-600">
            Portfolio
          </Link>
          <a href="/#reviews" className="py-2 hover:text-gray-600">
            Reviews
          </a>
          <a href="/#book" className="py-2 hover:text-gray-600">
            Book
          </a>
          <a href="/#contact" className="py-2 hover:text-gray-600">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

