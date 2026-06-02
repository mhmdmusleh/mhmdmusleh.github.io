import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900">
            <img src="/logo.png" alt="musleh.media logo" className="h-8 w-auto rounded-full" />
            <span>musleh.media</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${pathname === link.to
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="sm:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-2 py-2 text-sm font-medium rounded transition-colors ${pathname === link.to
                  ? 'text-gray-900 bg-gray-50'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
