import { Link } from 'react-router-dom'
import { ShieldCheck, Users, BookOpen, Heart } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Years of Service', value: '40+' },
  { icon: BookOpen, label: 'Science of Mind', value: 'Since 1926' },
  { icon: Heart, label: 'Spiritual Community', value: 'Ventura, CA' },
]

export default function Hero() {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-800/80 backdrop-blur-sm border border-primary-700 rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-accent-300">Registered 501(c)(3) Nonprofit | EIN: 11-2611716</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            United Church of<br />
            <span className="text-accent-400">Religious Science</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            A welcoming spiritual community in Ventura, California, dedicated to the transformative 
            teachings of Ernest Holmes and the Science of Mind. We believe in the power of affirmative 
            prayer, spiritual mind treatment, and the infinite potential within every person.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/programs" className="btn-accent w-full sm:w-auto">
              Explore Our Programs
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 border border-primary-400 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors w-full sm:w-auto">
              Learn About Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-accent-400 mx-auto mb-2" />
                <div className="font-serif font-bold text-xl md:text-2xl text-white">{stat.value}</div>
                <div className="text-xs text-primary-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative border-t border-primary-800 bg-primary-900/90">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-primary-300">
            <span>EIN: 11-2611716</span>
            <span className="hidden sm:inline">|</span>
            <span>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</span>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="hover:text-accent-300 transition-colors">
              admin@derech-ayson-rabbinical-seminary.sbs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
