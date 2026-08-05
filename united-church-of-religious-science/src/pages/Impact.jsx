import { Helmet } from 'react-helmet-async'
import { Users, BookOpen, Heart, Calendar, Award, HandHeart } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const stats = [
  { icon: Calendar, value: '40+', label: 'Years of Service in Ventura' },
  { icon: Users, value: '500+', label: 'Individuals Served Annually' },
  { icon: BookOpen, value: '100+', label: 'Science of Mind Students' },
  { icon: Heart, value: '1,200+', label: 'Spiritual Treatments Given' },
  { icon: HandHeart, value: '50+', label: 'Community Service Projects' },
  { icon: Award, value: '1984', label: 'Year of Founding' },
]

const testimonials = [
  {
    quote: "The United Church of Religious Science has been my spiritual home for over fifteen years. The teachings of Ernest Holmes, shared through our ministers and practitioners, have transformed my understanding of prayer, healing, and the power of my own mind. I am forever grateful for this community.",
    name: "Margaret T.",
    role: "Longtime Member & Practitioner Student",
  },
  {
    quote: "When I first walked through the doors, I was searching for something I could not name. What I found was a community that accepted me exactly as I was, and teachings that gave me practical tools to change my life. The Science of Mind is not just philosophy — it works.",
    name: "David R.",
    role: "Member Since 2019",
  },
  {
    quote: "As a newcomer to Ventura, I was looking for a spiritual community that honored diversity and intellectual curiosity. This church exceeded every expectation. The classes are rigorous, the fellowship is warm, and the Spiritual Mind Treatments have supported me through major life transitions.",
    name: "Sarah K.",
    role: "New Member & Class Participant",
  },
]

const partners = [
  'Ventura County Food Share',
  'Centers for Spiritual Living',
  'Local Interfaith Council of Ventura',
  'Habitat for Humanity Ventura County',
  'Ventura County Community Foundation',
  'Science of Mind Archives and Library',
]

export default function Impact() {
  return (
    <>
      <Helmet>
        <title>Impact | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="See the impact of the United Church of Religious Science in Ventura, CA. Serving our community since 1984 as a 501(c)(3) nonprofit (EIN: 77-0003763)." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/impact" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              For four decades, the United Church of Religious Science has been a beacon of hope, healing, 
              and spiritual education in Ventura County. Our work touches lives through worship, education, 
              pastoral care, and community service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="By The Numbers"
            subtitle="The measurable impact of our programs and community engagement since 1984."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
                <stat.icon className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary-900">{stat.value}</div>
                <div className="text-sm text-primary-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="Voices From Our Community"
            subtitle="Testimonials from members and friends who have experienced transformation through our church."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
                <div className="text-accent-400 text-4xl font-serif leading-none mb-4">"</div>
                <p className="text-primary-700 leading-relaxed mb-6">{t.quote}</p>
                <div className="pt-4 border-t border-primary-100">
                  <div className="font-semibold text-primary-900">{t.name}</div>
                  <div className="text-sm text-primary-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto text-center">
          <SectionHeader
            title="Community Partners"
            subtitle="We are proud to collaborate with these organizations to extend our impact throughout Ventura County."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((partner) => (
              <div key={partner} className="bg-primary-50 rounded-lg px-4 py-3 border border-primary-100">
                <span className="text-sm font-medium text-primary-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Report CTA */}
      <section className="bg-primary-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Transparency & Accountability</h2>
            <p className="text-primary-200 mb-6">
              As a 501(c)(3) tax-exempt organization (EIN: 77-0003763), we are committed to financial transparency 
              and responsible stewardship of all donations and resources.
            </p>
            <div className="text-sm text-primary-300 space-y-1">
              <p>United Church of Religious Science</p>
              <p>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
              <p>EIN: 77-0003763 | admin@unitedchurchofreligiousscience.sbs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
