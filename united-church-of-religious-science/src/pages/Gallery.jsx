import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { MapPin, Calendar, Camera } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const categories = ['All', 'Services', 'Classes', 'Outreach', 'Retreats']

const events = [
  { title: 'Spring Equinox Service 2026', date: 'March 20, 2026', location: 'Main Sanctuary, Ventura', category: 'Services', description: 'A joyful celebration of renewal and balance featuring meditation, music, and community fellowship.' },
  { title: 'Science of Mind Foundations Graduation', date: 'May 15, 2026', location: 'Education Room', category: 'Classes', description: 'Completion ceremony for students who completed the 10-week Foundations course.' },
  { title: 'Community Garden Project', date: 'April 12, 2026', location: 'Downtown Ventura', category: 'Outreach', description: 'Members volunteered alongside Habitat for Humanity to plant community gardens.' },
  { title: 'Day of Mindfulness Spring Retreat', date: 'June 7, 2026', location: 'Ojai Valley', category: 'Retreats', description: 'A full-day silent retreat with walking meditation, journaling, and communal lunch.' },
  { title: 'Holiday Giving Drive 2025', date: 'December 14, 2025', location: 'Ventura County Food Share', category: 'Outreach', description: 'Annual donation drive delivering meals and supplies to 150+ local families.' },
  { title: 'Youth Sunday Celebration', date: 'February 9, 2026', location: 'Main Sanctuary', category: 'Services', description: 'Special service led by our Youth Education Coordinator and teen participants.' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? events : events.filter(e => e.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Gallery | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Photo gallery of events at the United Church of Religious Science in Ventura, CA. 501(c)(3) nonprofit (EIN: 77-0003763)." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/gallery" />
      </Helmet>

      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Event Gallery</h1>
            <p className="text-lg text-primary-200">Moments from our services, classes, retreats, and community outreach.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader title="Past Events" subtitle="Highlights from our community life since 1984." />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat ? 'bg-primary-900 text-white' : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(event => (
              <div key={event.title} className="bg-primary-50 rounded-xl overflow-hidden border border-primary-100">
                <div className="h-48 bg-primary-100 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary-300" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full">{event.category}</span>
                  <h3 className="font-serif font-bold text-lg text-primary-900 mt-2 mb-1">{event.title}</h3>
                  <p className="text-primary-600 text-sm mb-3">{event.description}</p>
                  <div className="flex items-center gap-3 text-xs text-primary-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
