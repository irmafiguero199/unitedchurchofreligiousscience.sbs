import { Helmet } from 'react-helmet-async'
import { Users, Calendar, ShieldCheck } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const boardRoles = [
  {
    title: 'President of the Board',
    description: 'Provides strategic leadership and governance oversight for the United Church of Religious Science. The President chairs board meetings, ensures fiduciary responsibility, and represents the organization in community and denominational affairs.',
    responsibilities: ['Board meeting facilitation', 'Strategic planning oversight', 'Community representation', 'Denominational liaison'],
  },
  {
    title: 'Vice President',
    description: 'Supports the President in governance duties and assumes leadership responsibilities in the President's absence. Oversees specific committees including Finance and Program Development.',
    responsibilities: ['Committee oversight', 'Leadership succession', 'Program evaluation', 'Member engagement'],
  },
  {
    title: 'Treasurer',
    description: 'Manages the financial health of the organization, oversees budgeting, financial reporting, and ensures compliance with 501(c)(3) regulations. Works closely with the Executive Director on fiscal matters.',
    responsibilities: ['Budget management', 'Financial reporting', '501(c)(3) compliance', 'Audit coordination'],
  },
  {
    title: 'Secretary',
    description: 'Maintains official records of the organization including meeting minutes, bylaws, and corporate documents. Ensures timely filing of state and federal reports.',
    responsibilities: ['Meeting minutes', 'Corporate records', 'Legal documentation', 'Report filing'],
  },
  {
    title: 'Board Member at Large',
    description: 'Contributes to board deliberations, serves on committees, and brings diverse perspectives to organizational governance. Represents the interests of the congregation and community.',
    responsibilities: ['Committee participation', 'Community input', 'Policy development', 'Outreach support'],
  },
]

const staffRoles = [
  {
    title: 'Senior Minister',
    description: 'The spiritual and administrative leader of the congregation. Delivers Sunday messages, provides pastoral care, oversees religious education, and represents the church in the broader community. Licensed by Centers for Spiritual Living.',
  },
  {
    title: 'Licensed Practitioner',
    description: 'Provides one-on-one Spiritual Mind Treatment sessions to support the spiritual and emotional well-being of members and the community. Practitioners have completed extensive training and are licensed by Centers for Spiritual Living.',
  },
  {
    title: 'Youth Education Coordinator',
    description: 'Develops and implements age-appropriate spiritual education curricula for children and teens. Creates a nurturing environment where young people explore Science of Mind principles through stories, art, and discussion.',
  },
  {
    title: 'Music Director',
    description: 'Oversees the musical elements of Sunday services and special events. Selects repertoire, coordinates musicians, and ensures that music supports the spiritual themes of each service.',
  },
  {
    title: 'Administrative Coordinator',
    description: 'Manages day-to-day office operations, coordinates communications, maintains records, and serves as the primary point of contact for inquiries. Supports the board and minister in organizational administration.',
  },
]

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Meet the board and staff of the United Church of Religious Science in Ventura, CA. A 501(c)(3) nonprofit (EIN: 77-0003763) serving our community since 1984." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/team" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              Dedicated ministers, practitioners, board members, and staff who serve our spiritual community 
              with love, wisdom, and commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="Board of Directors"
            subtitle="The governing body of the United Church of Religious Science, elected by the congregation to provide oversight, strategic direction, and fiduciary stewardship."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardRoles.map((role) => (
              <div key={role.title} className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4">
                  <Users className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-900 mb-2">{role.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed mb-4">{role.description}</p>
                <div className="space-y-1">
                  {role.responsibilities.map((r) => (
                    <div key={r} className="flex items-center gap-2 text-xs text-primary-500">
                      <span className="w-1 h-1 bg-accent-500 rounded-full" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-accent-50 rounded-xl p-6 border border-accent-100 text-center">
            <Calendar className="w-6 h-6 text-accent-600 mx-auto mb-2" />
            <h4 className="font-semibold text-primary-900 mb-1">Board Meetings</h4>
            <p className="text-primary-600 text-sm">
              The Board of Directors meets monthly on the third Thursday at 6:00 PM at 2646 Palma Dr Ste 250, Ventura, CA 93003-7739. 
              Members are welcome to attend open sessions. Minutes are available upon request by contacting 
              <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-accent-600 hover:underline ml-1">admin@unitedchurchofreligiousscience.sbs</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="Staff & Ministry"
            subtitle="Our dedicated team of religious professionals and administrative staff who bring the teachings of the Science of Mind to life."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffRoles.map((role) => (
              <div key={role.title} className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-900 mb-2">{role.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Note */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">Governance & Transparency</h2>
          <p className="text-primary-600 leading-relaxed mb-6">
            The United Church of Religious Science operates under the governance of an elected Board of Directors 
            in accordance with our bylaws and the requirements of California nonprofit corporation law. As a 
            501(c)(3) tax-exempt religious organization (EIN: 77-0003763), we maintain transparent governance 
            practices and welcome inquiries from our community.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg text-sm text-primary-600">
            <ShieldCheck className="w-4 h-4 text-accent-600" />
            <span>EIN: 77-0003763 | 2646 Palma Dr Ste 250, Ventura, CA 93003-7739</span>
          </div>
        </div>
      </section>
    </>
  )
}
