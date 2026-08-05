import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const articles = [
  {
    title: 'Embracing Change: A Science of Mind Perspective',
    date: 'July 28, 2026',
    category: 'Spiritual Living',
    excerpt: 'Change is the only constant in life. Ernest Holmes taught that we are not victims of circumstance but creators of our experience. This article explores practical tools for navigating transitions with grace and power.',
  },
  {
    title: 'Youth Ministry Expansion Announced for Fall 2026',
    date: 'July 15, 2026',
    category: 'Announcements',
    excerpt: 'We are thrilled to announce the expansion of our Youth and Family Ministry program, including new teen discussion groups, family service projects, and a dedicated youth coordinator position.',
  },
  {
    title: 'The Five Steps of Spiritual Mind Treatment',
    date: 'June 30, 2026',
    category: 'Education',
    excerpt: 'Spiritual Mind Treatment is the affirmative prayer practice at the heart of Religious Science. Learn the five steps — Recognition, Unification, Realization, Thanksgiving, and Release — and how to apply them daily.',
  },
  {
    title: 'Community Outreach: Summer Food Drive Results',
    date: 'June 12, 2026',
    category: 'Outreach',
    excerpt: 'Thanks to the generosity of our congregation, we collected and distributed over 800 pounds of food to Ventura County Food Share, supporting families throughout the summer months.',
  },
  {
    title: 'Remembering Ernest Holmes: Legacy and Relevance',
    date: 'May 22, 2026',
    category: 'History',
    excerpt: 'On the anniversary of Ernest Holmes' passing, we reflect on the enduring relevance of his teachings in a modern world seeking meaning, healing, and connection.',
  },
  {
    title: 'New Meditation Series: Wednesdays at 7 PM',
    date: 'May 5, 2026',
    category: 'Programs',
    excerpt: 'Starting this month, we are offering a new guided meditation series every Wednesday evening. All experience levels welcome. No registration required.',
  },
]

export default function News() {
  return (
    <>
      <Helmet>
        <title>News | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Latest news and articles from the United Church of Religious Science in Ventura, CA. 501(c)(3) nonprofit (EIN: 77-0003763)." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/news" />
      </Helmet>

      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">News & Articles</h1>
            <p className="text-lg text-primary-200">Updates, reflections, and stories from our spiritual community.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader title="Latest Updates" subtitle="Stay informed about programs, events, and spiritual teachings." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <article key={article.title} className="bg-white rounded-xl border border-primary-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-3.5 h-3.5 text-accent-600" />
                  <span className="text-xs font-medium text-accent-600">{article.category}</span>
                  <span className="text-primary-300">|</span>
                  <span className="text-xs text-primary-400 flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-900 mb-2">{article.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                <button className="inline-flex items-center gap-1 text-accent-600 text-sm font-medium mt-4 hover:text-accent-700">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
