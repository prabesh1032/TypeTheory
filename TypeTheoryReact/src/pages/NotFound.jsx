import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/typetheory.png'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">

        {/* Illustration / logo */}
        <div className="flex items-center justify-center">
          <div className="bg-black rounded-full p-1 inline-flex">
            <img src={logo} alt="TypeTheory" className="h-20 w-auto object-contain hover:opacity-80 transition-opacity duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">404</h1>
          <h2 className="mt-2 text-2xl font-semibold text-gray-700">Page not found</h2>
          <p className="mt-4 text-gray-600 max-w-lg">The page you are looking for doesn't exist or has been moved. Try going back to the homepage or explore our latest articles.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 md:justify-start justify-center">
            <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium">
              Go home
            </Link>

            <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
              Explore articles
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-400">Need help? Contact us or try the search.</p>
        </div>

      </div>
    </div>
  )
}

export default NotFound
