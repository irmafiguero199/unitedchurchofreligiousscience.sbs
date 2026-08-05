import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-sage-50 border-y border-sage-100">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-10 h-10 text-sage-600 mx-auto mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-3">
            Stay Connected
          </h2>
          <p className="text-primary-600 mb-8">
            Subscribe to our newsletter for weekly affirmations, event updates, and insights from the Science of Mind.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-sage-700 bg-sage-100 rounded-lg py-4 px-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Thank you for subscribing! Check your inbox for confirmation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent text-primary-900"
              />
              <button type="submit" className="btn-primary gap-2">
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-primary-400 mt-4">
            United Church of Religious Science — EIN: 77-0003763 — 2646 Palma Dr Ste 250, Ventura, CA 93003-7739
          </p>
        </div>
      </div>
    </section>
  )
}
