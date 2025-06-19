import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext' // <-- add this

/**
 * Simple site-wide navigation bar with theme switcher
 */
const Navbar = () => {
  const { theme, toggleTheme } = useTheme() // <-- use context

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
          PLP Task Manager
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:underline">
            Home
          </Link>
          <button
            onClick={toggleTheme}
            className="text-sm px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
