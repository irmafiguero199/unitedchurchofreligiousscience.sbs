import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Mission & Vision', path: '/mission-vision' },
  { name: 'Programs', path: '/programs' },
  { name: 'Impact', path: '/impact' },
  { name: 'Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Donate', path: '/donate' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white text-sm">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="font-medium">EIN: 11-2611716</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-primary-200">
              <MapPin className="w-3.5 h-3.5" />
              2646 Palma Dr Ste 250, Ventura, CA 93003-7739
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+18056431933" className="flex items-center gap-1.5 hover:text-accent-300 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(805) 643-1933</span>
            </a>
            <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="hidden md:flex items-center gap-1.5 hover:text-accent-300 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>admin@derech-ayson-rabbinical-seminary.sbs</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`sticky top-0 z-50 bg-white border-b border-primary-100 transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center">
                <span className="text-accent-400 font-serif font-bold text-lg">U</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-serif font-bold text-primary-900 text-lg leading-tight">United Church of</div>
                <div className="font-serif font-bold text-accent-600 text-sm leading-tight">Religious Science</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-900 bg-primary-50'
                      : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-primary-600 hover:text-primary-900 hover:bg-primary-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-primary-100">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-primary-900 bg-primary-50'
                      : 'text-primary-600 hover:text-primary-900 hover:bg-primary-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-primary-100 text-xs text-primary-500 space-y-1">
                <p>EIN: 11-2611716</p>
                <p>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
                <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="block text-accent-600">admin@derech-ayson-rabbinical-seminary.sbs</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
