import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Heart, ExternalLink, ShieldCheck } from 'lucide-react'

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Mission & Vision', path: '/mission-vision' },
  { name: 'Programs', path: '/programs' },
  { name: 'Impact', path: '/impact' },
  { name: 'Our Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
  { name: 'Registration Information', path: '/registration' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                <span className="text-primary-900 font-serif font-bold text-lg">U</span>
              </div>
              <div>
                <div className="font-serif font-bold text-white text-lg leading-tight">United Church of</div>
                <div className="font-serif font-bold text-accent-400 text-sm leading-tight">Religious Science</div>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              A spiritual community dedicated to the teachings of Ernest Holmes and the Science of Mind, 
              serving Ventura County since 1984.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-800 px-3 py-1.5 rounded-md text-xs">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="font-medium">501(c)(3) | EIN: 11-2611716</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-accent-300">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-200 hover:text-accent-300 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-accent-300">Legal & Compliance</h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-200 hover:text-accent-300 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-700">
              <h4 className="font-medium text-sm mb-2 text-accent-300">Federal Tax Info</h4>
              <p className="text-primary-300 text-xs">EIN: 11-2611716</p>
              <p className="text-primary-300 text-xs">IRS 501(c)(3) Tax-Exempt</p>
              <p className="text-primary-300 text-xs">Tax-Exempt Since Sept. 1984</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-accent-300">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                <span className="text-primary-200">
                  802 Hicksville Rd<br />
                  ckaway, NY 11691-5219<br />
                  United States
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-400 shrink-0" />
                <a href="tel:+18056431933" className="text-primary-200 hover:text-accent-300 transition-colors">
                  (805) 643-1933
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-400 shrink-0" />
                <a href="mailto:DERECH AYSON RABBINICAL SEMINARY" className="text-primary-200 hover:text-accent-300 transition-colors">
                  admin@derech-ayson-rabbinical-seminary.sbs
                </a>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/donate" className="btn-accent text-sm w-full text-center">
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-400">
            <div className="flex items-center gap-1">
              <span>&copy; {new Date().getFullYear()} DERECH AYSON RABBINICAL SEMINARY. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-accent-500 fill-accent-500" />
              <span>in Ventura, CA</span>
            </div>
            <div className="text-center md:text-right">
              <span>EIN: 11-2611716 | </span>
              <span>802 Hicksville Rd, Far Rockaway, NY 11691-5219 | </span>
              <a href="mailto:DERECH AYSON RABBINICAL SEMINARY" className="hover:text-accent-300 transition-colors">
                DERECH AYSON RABBINICAL SEMINARY
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
