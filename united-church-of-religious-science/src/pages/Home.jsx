import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, BookOpen, Heart, Users, ArrowRight, Sparkles, Globe, Lightbulb } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'

const programs = [
  {
    icon: Sparkles,
    title: 'Sunday Celebration Services',
    description: 'Weekly inspirational services featuring meditation, music, and affirmative prayer based on the Science of Mind teachings.',
    link: '/programs',
  },
  {
    icon: BookOpen,
    title: 'Science of Mind Classes',
    description: 'Structured study groups exploring Ernest Holmes' foundational text and practical spiritual principles for daily living.',
    link: '/programs',
  },
  {
    icon: Heart,
    title: 'Spiritual Mind Treatment',
    description: 'One-on-one affirmative prayer sessions with licensed practitioners to support healing, clarity, and personal growth.',
    link: '/programs',
  },
  {
    icon: Users,
    title: 'Community & Fellowship',
    description: 'Small groups, social gatherings, and volunteer opportunities that build meaningful connections among members.',
    link: '/programs',
  },
]

const values = [
  {
    icon: Lightbulb,
    title: 'The Power of Mind',
    description: 'We believe that thoughts are creative and that changing our thinking changes our lives. The Science of Mind provides a practical framework for conscious living.',
  },
  {
    icon: Heart,
    title: 'Inclusive Spirituality',
    description: 'We honor all paths to the Divine. Our community welcomes people of every background, faith tradition, and walk of life without judgment or dogma.',
  },
  {
    icon: Globe,
    title: 'Universal Principles',
    description: 'The teachings of Ernest Holmes draw from ancient wisdom traditions, philosophy, and modern psychology to offer timeless spiritual truths.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>United Church of Religious Science | 501(c)(3) Spiritual Community Ventura, CA</title>
        <meta name="description" content="United Church of Religious Science — A 501(c)(3) spiritual community in Ventura, CA dedicated to the teachings of Ernest Holmes and the Science of Mind. EIN: 77-0003763." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/" />
      </Helmet>

      <Hero />

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto text-center">
          <SectionHeader
            title="Our Mission"
            subtitle="To provide a spiritual home where individuals can discover and express their divine potential through the study and practice of the Science of Mind."
          />
          <p className="text-primary-600 leading-relaxed mb-8">
            The United Church of Religious Science is a spiritual community rooted in the teachings of Ernest Holmes, 
            author of <em>The Science of Mind</em>. Founded in 1927 as a religious movement and established in Ventura 
            in 1984, we offer a practical spirituality that empowers individuals to transform their lives through 
            affirmative prayer, conscious thinking, and compassionate action. As a registered 501(c)(3) nonprofit 
            organization (EIN: 77-0003763), we are committed to serving our community with integrity, inclusivity, 
            and love.
          </p>
          <Link to="/mission-vision" className="btn-primary gap-2">
            Read Our Full Mission
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="What We Offer"
            subtitle="Programs and services designed to support your spiritual journey and personal transformation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Link
                key={program.title}
                to={program.link}
                className="group bg-white rounded-xl p-6 shadow-sm border border-primary-100 hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <program.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-900 mb-2">{program.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed">{program.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="btn-accent gap-2">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="Our Core Beliefs"
            subtitle="The spiritual principles that guide our community and shape everything we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-sage-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary-900 mb-3">{value.title}</h3>
                <p className="text-primary-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Join Us This Sunday
            </h2>
            <p className="text-primary-200 text-lg mb-8">
              Experience the power of affirmative prayer, uplifting music, and community fellowship. 
              All are welcome at the United Church of Religious Science in Ventura.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-accent gap-2">
                <Calendar className="w-4 h-4" />
                Service Times & Directions
              </Link>
              <Link to="/donate" className="inline-flex items-center justify-center px-6 py-3 border border-primary-400 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors">
                Support Our Work
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-primary-800 text-sm text-primary-300">
              <p>United Church of Religious Science | EIN: 77-0003763</p>
              <p>2646 Palma Dr Ste 250, Ventura, CA 93003-7739 | admin@unitedchurchofreligiousscience.sbs</p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
