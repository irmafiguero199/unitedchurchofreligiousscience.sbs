import { Helmet } from 'react-helmet-async'
import { Target, Eye, Compass, BookOpen, Heart, Lightbulb, Users, Globe } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const objectives = [
  {
    icon: BookOpen,
    title: 'Expand Spiritual Education',
    description: 'By 2030, offer a comprehensive curriculum of Science of Mind classes, workshops, and certification programs serving 200+ students annually across Ventura County.',
    timeline: '2026-2030',
  },
  {
    icon: Heart,
    title: 'Strengthen Community Outreach',
    description: 'Launch targeted outreach programs for underserved populations, including free spiritual mind treatment sessions, youth mentorship, and senior wellness initiatives.',
    timeline: '2026-2028',
  },
  {
    icon: Lightbulb,
    title: 'Digital Presence & Accessibility',
    description: 'Develop online streaming capabilities for services and classes, creating a hybrid in-person and virtual community accessible to members regardless of location or mobility.',
    timeline: '2025-2027',
  },
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Establish a pipeline for training and licensing new Religious Science practitioners and ministers, ensuring the continuity of our spiritual lineage for future generations.',
    timeline: '2026-2030',
  },
  {
    icon: Globe,
    title: 'Interfaith Collaboration',
    description: 'Build bridges with other spiritual and religious communities in Ventura County through shared events, dialogues, and collaborative service projects.',
    timeline: '2027-2030',
  },
  {
    icon: Compass,
    title: 'Sustainable Growth',
    description: 'Achieve financial sustainability through diversified funding, endowment building, and responsible stewardship of resources while maintaining our 501(c)(3) mission integrity.',
    timeline: '2025-2030',
  },
]

export default function MissionVision() {
  return (
    <>
      <Helmet>
        <title>Mission & Vision | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="The mission and vision of the United Church of Religious Science in Ventura, CA. A 501(c)(3) nonprofit (EIN: 77-0003763) dedicated to the Science of Mind." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/mission-vision" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Mission & Vision</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              Our purpose, our direction, and our commitment to transforming lives through the Science of Mind.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-primary-50 rounded-full flex items-center justify-center">
                <Target className="w-16 h-16 text-primary-700" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-4">Our Mission</h2>
              <p className="text-lg text-primary-700 leading-relaxed mb-4">
                The United Church of Religious Science exists to provide a spiritual home where individuals can discover, 
                explore, and express their divine potential through the study and practice of the Science of Mind as 
                taught by Ernest Holmes.
              </p>
              <p className="text-primary-600 leading-relaxed">
                We are committed to teaching that there is a Universal Mind and that this Universal Mind is one with 
                individual minds. We believe that all living beings are one, that everyone is an expression of God, 
                and that positive thoughts and prayer lead to both spiritual and physical healing. As a 501(c)(3) 
                tax-exempt religious organization (EIN: 77-0003763), we serve our community through worship, education, 
                pastoral care, and outreach, honoring all paths to the Divine and welcoming people of every background 
                and faith tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-primary-50">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Eye className="w-16 h-16 text-accent-600" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-4">Our Vision</h2>
              <p className="text-lg text-primary-700 leading-relaxed mb-4">
                We envision a world transformed by conscious, compassionate individuals who recognize their inherent 
                divinity and use the power of their minds to create lives of abundance, health, joy, and peace.
              </p>
              <p className="text-primary-600 leading-relaxed">
                By 2030, the United Church of Religious Science in Ventura will be recognized as a leading center 
                for spiritual education and personal transformation in Southern California. We will be a thriving, 
                diverse community of practitioners, students, and seekers who actively contribute to the spiritual 
                awakening of Ventura County and beyond. Our teachings will reach thousands through in-person services, 
                classes, and digital platforms, creating ripples of positive change that extend far beyond our walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="Strategic Objectives 2026-2030"
            subtitle="Concrete goals that guide our growth and ensure we fulfill our mission with excellence and integrity."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj) => (
              <div key={obj.title} className="bg-white rounded-xl p-6 border border-primary-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    <obj.icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded-full">{obj.timeline}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-900 mb-2">{obj.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-8">What We Believe</h2>
          <div className="space-y-6 text-primary-200 leading-relaxed max-w-3xl mx-auto">
            <p>
              We believe in One Infinite Mind, Universal Spirit, God, which is the source and substance of all creation. 
              This Universal Mind is expressed through individual minds, and every person is a unique expression of the Divine.
            </p>
            <p>
              We believe in the power of affirmative prayer — what we call Spiritual Mind Treatment — to transform 
              consciousness and manifest positive conditions in our lives. Through the five steps of Recognition, 
              Unification, Realization, Thanksgiving, and Release, we align our thinking with the Truth of our being.
            </p>
            <p>
              We believe that all life is sacred, that everyone is worthy of love and respect, and that our community 
              is strengthened by diversity of background, experience, and perspective. We welcome all who seek spiritual 
              growth regardless of race, ethnicity, gender, sexual orientation, or previous religious affiliation.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-primary-800 text-sm text-primary-300">
            <p>United Church of Religious Science | EIN: 77-0003763</p>
            <p>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
          </div>
        </div>
      </section>
    </>
  )
}
