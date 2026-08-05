import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ShieldCheck } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | United Church of Religious Science</title>
        <meta name="description" content="The page you are looking for does not exist. United Church of Religious Science — 501(c)(3) nonprofit, EIN: 77-0003763, Ventura, CA." />
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center bg-primary-50">
        <div className="container-narrow mx-auto px-4 text-center">
          <h1 className="font-serif text-8xl font-bold text-accent-500 mb-2">404</h1>
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Page Not Found</h2>
          <p className="text-primary-600 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. 
            Return to our homepage to explore the United Church of Religious Science.
          </p>
          <Link to="/" className="btn-primary gap-2 inline-flex">
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <div className="mt-10 pt-6 border-t border-primary-200 text-xs text-primary-400 space-y-1">
            <p className="flex items-center justify-center gap-1"><ShieldCheck className="w-3 h-3" /> United Church of Religious Science</p>
            <p>EIN: 77-0003763 | 2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
            <p><a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="hover:text-accent-600">admin@unitedchurchofreligiousscience.sbs</a></p>
          </div>
        </div>
      </section>
    </>
  )
}
