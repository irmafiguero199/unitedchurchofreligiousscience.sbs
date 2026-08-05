import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, BookOpen, Heart, Sparkles, Music, Baby, HandHeart, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const programs = [
  {
    icon: Sparkles,
    title: 'Sunday Celebration Services',
    description: 'Our weekly Sunday services are the heart of our community. Each service includes guided meditation, inspirational music, and a message rooted in the Science of Mind principles. Services are designed to uplift, inspire, and provide practical spiritual tools for the week ahead.',
    details: [
      'Inspirational talks based on Science of Mind teachings',
      'Live music and congregational singing',
      'Guided meditation and silent reflection',
      'Affirmative prayer and Spiritual Mind Treatment',
      'Youth education programs during service',
    ],
    schedule: 'Sundays at 10:00 AM',
    location: '2646 Palma Dr Ste 250, Ventura, CA 93003-7739',
    eligibility: 'Open to all ages and spiritual backgrounds',
  },
  {
    icon: BookOpen,
    title: 'Science of Mind Foundations',
    description: "A structured educational program exploring the core principles of Ernest Holmes' Science of Mind. These classes provide a deep understanding of spiritual law, the nature of consciousness, and practical techniques for applying these principles to everyday life.",
    details: [
      'Foundations of Science of Mind (10-week course)',
      'Study of The Science of Mind textbook',
      'Practical application exercises',
      'Small group discussion and reflection',
      'Certificate of completion available',
    ],
    schedule: 'Tuesdays at 6:30 PM (10-week sessions)',
    location: '2646 Palma Dr Ste 250, Ventura, CA 93003-7739',
    eligibility: 'Open to all; no prior experience required',
  },
  {
    icon: HandHeart,
    title: 'Spiritual Mind Treatment Ministry',
    description: 'Licensed Religious Science practitioners provide one-on-one Spiritual Mind Treatment sessions — a form of affirmative prayer that supports healing, clarity, and transformation. Practitioners are trained in the five steps of treatment and bound by a strict code of ethics.',
    details: [
      'Private one-on-one treatment sessions',
      'Phone and in-person appointments available',
      'Support for health, relationships, prosperity, and purpose',
      'Confidential and compassionate care',
      'Practitioners licensed by Centers for Spiritual Living',
    ],
    schedule: 'By appointment Monday through Saturday',
    location: '2646 Palma Dr Ste 250, Ventura, CA 93003-7739',
    eligibility: 'Available to members and non-members',
  },
  {
    icon: Music,
    title: 'Meditation & Contemplation',
    description: 'Regular meditation sessions designed to quiet the mind, deepen spiritual awareness, and cultivate inner peace. Sessions incorporate various techniques including guided visualization, breathwork, and silent contemplation.',
    details: [
      'Guided group meditation sessions',
      'Breathwork and mindfulness practices',
      'Silent contemplation periods',
      'Meditation instruction for beginners',
      'Special themed meditation events',
    ],
    schedule: 'Wednesdays at 7:00 PM and Saturdays at 9:00 AM',
    location: '2646 Palma Dr Ste 250, Ventura, CA 93003-7739',
    eligibility: 'Open to all experience levels',
  },
  {
    icon: Baby,
    title: 'Youth & Family Ministry',
    description: "Spiritual education programs for children and teens that teach Science of Mind principles in age-appropriate ways. Our youth programs emphasize self-esteem, compassion, creativity, and the recognition of each child's innate divinity.",
    details: [
      'Sunday morning youth classes (ages 4-12)',
      'Teen discussion groups (ages 13-17)',
      'Family service projects and events',
      'Seasonal celebrations and ceremonies',
      'Youth leadership development opportunities',
    ],
    schedule: 'Sundays during the 10:00 AM service',
    location: '2646 Palma Dr Ste 250, Ventura, CA 93003-7739',
    eligibility: 'Open to all families; no membership required',
  },
  {
    icon: Heart,
    title: 'Community Outreach & Service',
    description: 'We believe that spiritual practice must be expressed through action. Our outreach programs serve the broader Ventura community through volunteer service, charitable giving, and partnerships with local organizations addressing food insecurity, housing, and social justice.',
    details: [
      'Monthly community service projects',
      'Partnership with local food banks and shelters',
      'Annual holiday giving campaigns',
      'Environmental stewardship initiatives',
      'Social justice education and advocacy',
    ],
    schedule: 'Monthly events; calendar varies',
    location: 'Various locations throughout Ventura County',
    eligibility: 'Open to all community members',
  },
]

const upcomingEvents = [
  { title: 'Fall Equinox Celebration', date: 'September 21, 2026', time: '10:00 AM', location: 'Main Sanctuary', description: 'A special Sunday service celebrating balance, harvest, and gratitude as we transition into the autumn season.' },
  { title: 'Science of Mind Foundations Class Begins', date: 'October 6, 2026', time: '6:30 PM', location: 'Education Room', description: "Ten-week introductory course covering the core principles of Ernest Holmes' Science of Mind. Registration required." },
  { title: 'Day of Mindfulness Retreat', date: 'November 8, 2026', time: '9:00 AM - 4:00 PM', location: '2646 Palma Dr Ste 250', description: 'A full-day retreat featuring meditation, reflection, nature walks, and community fellowship. Lunch provided.' },
  { title: 'Holiday Giving Drive Kickoff', date: 'November 22, 2026', time: '10:00 AM', location: 'Community Hall', description: 'Launch of our annual holiday giving campaign supporting local families in need throughout Ventura County.' },
]

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Explore programs at the United Church of Religious Science in Ventura, CA: Sunday services, Science of Mind classes, Spiritual Mind Treatment, meditation, and youth programs. EIN: 77-0003763." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/programs" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              Discover transformative programs designed to support your spiritual growth, deepen your understanding 
              of the Science of Mind, and connect you with a community of like-minded seekers.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="Program Offerings"
            subtitle="Six core program areas serving our community through worship, education, healing, and service."
          />
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={program.title} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl border ${index % 2 === 0 ? 'bg-primary-50 border-primary-100' : 'bg-white border-primary-100'}`}>
                <div className="lg:col-span-1">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                    <program.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-primary-900 mb-3">{program.title}</h2>
                  <p className="text-primary-600 leading-relaxed mb-4">{program.description}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-accent-600 font-medium hover:text-accent-700 transition-colors text-sm">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2 text-sm uppercase tracking-wide">Program Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-primary-600">
                          <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-primary-200">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-accent-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-primary-900 block">Schedule</span>
                        <span className="text-xs text-primary-600">{program.schedule}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-accent-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-primary-900 block">Location</span>
                        <span className="text-xs text-primary-600">{program.location}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-accent-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-primary-900 block">Eligibility</span>
                        <span className="text-xs text-primary-600">{program.eligibility}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Mark your calendar for these special gatherings, classes, and community celebrations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif font-bold text-lg text-primary-900">{event.title}</h3>
                  <span className="bg-accent-50 text-accent-700 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                    {event.date}
                  </span>
                </div>
                <p className="text-primary-600 text-sm leading-relaxed mb-4">{event.description}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-primary-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {event.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Service Area</h2>
          <p className="text-primary-600 leading-relaxed mb-6">
            The United Church of Religious Science primarily serves Ventura County, California, including the cities 
            of Ventura, Oxnard, Camarillo, Thousand Oaks, Ojai, Santa Paula, Fillmore, and surrounding communities. 
            Our digital programs extend our reach to members and students throughout California and beyond.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg text-sm text-primary-600">
            <MapPin className="w-4 h-4 text-accent-600" />
            <span>Headquarters: 2646 Palma Dr Ste 250, Ventura, CA 93003-7739</span>
          </div>
        </div>
      </section>
    </>
  )
}