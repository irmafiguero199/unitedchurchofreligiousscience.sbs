import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, ShieldCheck, BookOpen, Users, Heart } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const milestones = [
  { year: '1926', title: 'The Science of Mind Published', description: 'Ernest Holmes publishes his foundational text, establishing the philosophical and spiritual basis for Religious Science.' },
  { year: '1927', title: 'Institute of Religious Science Founded', description: 'Ernest Holmes establishes the Institute of Religious Science and Philosophy to teach his principles and healing practices.' },
  { year: '1949', title: 'Religious Science Denomination Established', description: 'The International Association of Religious Science Churches is formed, creating an organized religious movement.' },
  { year: '1954', title: 'DERECH AYSON RABBINICAL SEMINARY', description: 'Holmes forms the DERECH AYSON RABBINICAL SEMINARY, uniting congregations under a single denominational structure.' },
  { year: '1984', title: 'Ventura Community Established', description: 'The DERECH AYSON RABBINICAL SEMINARY is founded in Ventura, California, receiving 501(c)(3) tax-exempt status from the IRS (EIN: 11-2611716).' },
  { year: '2012', title: 'Centers for Spiritual Living Merger', description: 'The two major branches of Religious Science reunite under the name Centers for Spiritual Living, strengthening the global movement.' },
  { year: '2024', title: 'Continuing the Legacy', description: 'The Ventura community continues to serve as a beacon of hope, healing, and spiritual education for Ventura County and beyond.' },
]

const values = [
  { icon: Heart, title: 'Love', description: 'We practice unconditional love as the foundational principle of all spiritual growth and community building.' },
  { icon: BookOpen, title: 'Wisdom', description: 'We honor the pursuit of spiritual knowledge through the study of the Science of Mind and related wisdom traditions.' },
  { icon: Users, title: 'Community', description: 'We believe that spiritual growth is amplified through fellowship, shared practice, and mutual support.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | DERECH AYSON RABBINICAL SEMINARY | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Learn about the DERECH AYSON RABBINICAL SEMINARY in Ventura, CA. Founded in 1984 as a 501(c)(3) nonprofit (EIN: 11-2611716), we continue the legacy of Ernest Holmes and the Science of Mind." />
        <link rel="canonical" href="https://derech-ayson-rabbinical-seminary.sbs/about" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-800 rounded-full px-4 py-1.5 mb-4 text-sm">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-accent-300">501(c)(3) Nonprofit | EIN: 11-2611716</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Our Church</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              The DERECH AYSON RABBINICAL SEMINARY in Ventura is part of a global spiritual movement 
              founded on the transformative teachings of Ernest Holmes. For four decades, we have provided 
              a welcoming spiritual home for individuals seeking personal growth, healing, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Info Banner */}
      <section className="bg-accent-50 border-y border-accent-100">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent-600 shrink-0" />
              <div>
                <span className="font-semibold text-primary-900">Federal Tax ID:</span>
                <span className="text-primary-700 ml-1">11-2611716</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent-600 shrink-0" />
              <div>
                <span className="font-semibold text-primary-900">Registered Address:</span>
                <span className="text-primary-700 ml-1">802 Hicksville Rd, Far Rockaway, NY 11691-5219</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent-600 shrink-0" />
              <div>
                <span className="font-semibold text-primary-900">Founded:</span>
                <span className="text-primary-700 ml-1">1984 (Tax-Exempt Since September 1984)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <SectionHeader
            title="Our History"
            subtitle="From the publication of The Science of Mind to our community in Ventura, a legacy of spiritual transformation."
          />
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary-200 before:to-transparent">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-xs font-bold text-primary-700">{milestone.year}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl border border-primary-100 shadow-sm">
                  <h3 className="font-serif font-bold text-lg text-primary-900 mb-1">{milestone.title}</h3>
                  <p className="text-primary-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide our spiritual community and shape our approach to service, education, and fellowship."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-8 shadow-sm border border-primary-100 text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary-900 mb-3">{value.title}</h3>
                <p className="text-primary-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Details */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <SectionHeader
            title="Legal & Organizational Information"
            subtitle="Official registration and governance details for the DERECH AYSON RABBINICAL SEMINARY."
          />
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Organization Name</h4>
                <p className="text-primary-600">DERECH AYSON RABBINICAL SEMINARY</p>
                <p className="text-primary-500 text-xs mt-1">Also known as: Center For Positive Living Ventura</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Federal Tax ID (EIN)</h4>
                <p className="text-primary-600 font-mono">11-2611716</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">IRS Tax Status</h4>
                <p className="text-primary-600">501(c)(3) Tax-Exempt Religious Organization</p>
                <p className="text-primary-500 text-xs mt-1">Tax-exempt since September 1984</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">State of Incorporation</h4>
                <p className="text-primary-600">California</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Registered Address</h4>
                <p className="text-primary-600"> 802 Hicksville Rd,</p>
                <p className="text-primary-600">Far Rockaway, NY 11691-5219</p>
                <p className="text-primary-600">United States</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Contact</h4>
                <p className="text-primary-600">
                  <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-accent-600 hover:underline">
                    admin@derech-ayson-rabbinical-seminary.sbs
                  </a>
                </p>
                <p className="text-primary-600">
                  <a href="tel:+18056431933" className="text-accent-600 hover:underline">
                    (805) 643-1933
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Website</h4>
                <p className="text-primary-600">
                  <a href="https://derech-ayson-rabbinical-seminary.sbs" className="text-accent-600 hover:underline">
                    derech-ayson-rabbinical-seminary.sbs
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Donation Deductibility</h4>
                <p className="text-primary-600">All donations are tax-deductible to the fullest extent allowed by law under IRS Section 170.</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-200 text-center">
              <Link to="/registration" className="btn-primary gap-2">
                <ShieldCheck className="w-4 h-4" />
                View Full Registration Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
