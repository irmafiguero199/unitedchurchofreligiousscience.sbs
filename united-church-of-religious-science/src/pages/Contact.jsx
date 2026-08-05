import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ShieldCheck } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Contact the United Church of Religious Science in Ventura, CA. 501(c)(3) nonprofit (EIN: 77-0003763). Address: 2646 Palma Dr Ste 250, Ventura, CA 93003-7739." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/contact" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              We would love to hear from you. Reach out for service information, program inquiries, 
              Spiritual Mind Treatment requests, or any questions about our community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">Get In Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">Physical Address</h4>
                      <p className="text-primary-600 text-sm">
                        United Church of Religious Science<br />
                        2646 Palma Dr Ste 250<br />
                        Ventura, CA 93003-7739<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">Phone</h4>
                      <a href="tel:+18056431933" className="text-primary-600 text-sm hover:text-accent-600 transition-colors">
                        (805) 643-1933
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">Email</h4>
                      <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-primary-600 text-sm hover:text-accent-600 transition-colors">
                        admin@unitedchurchofreligiousscience.sbs
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">Office Hours</h4>
                      <p className="text-primary-600 text-sm">
                        Monday – Friday: 9:00 AM – 4:00 PM<br />
                        Saturday: 9:00 AM – 12:00 PM<br />
                        Sunday: 9:00 AM – 12:30 PM (Service Day)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nonprofit Info Card */}
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-accent-600" />
                  <h4 className="font-semibold text-primary-900">Nonprofit Information</h4>
                </div>
                <div className="text-sm text-primary-600 space-y-1">
                  <p><span className="font-medium">Organization:</span> United Church of Religious Science</p>
                  <p><span className="font-medium">EIN:</span> 77-0003763</p>
                  <p><span className="font-medium">Status:</span> 501(c)(3) Tax-Exempt</p>
                  <p><span className="font-medium">Address:</span> 2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
                  <p><span className="font-medium">Email:</span> <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-accent-600 hover:underline">admin@unitedchurchofreligiousscience.sbs</a></p>
                  <p><span className="font-medium">Phone:</span> <a href="tel:+18056431933" className="text-accent-600 hover:underline">(805) 643-1933</a></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-primary-100 shadow-sm p-6 md:p-8">
                <h2 className="font-serif text-2xl font-bold text-primary-900 mb-2">Send Us a Message</h2>
                <p className="text-primary-500 text-sm mb-6">
                  Fill out the form below and we will respond within 2 business days.
                </p>

                {submitted ? (
                  <div className="flex items-center gap-3 bg-sage-50 text-sage-700 rounded-lg py-6 px-6">
                    <CheckCircle className="w-6 h-6 shrink-0" />
                    <div>
                      <p className="font-medium">Message Sent Successfully</p>
                      <p className="text-sm">Thank you for reaching out. A member of our team will contact you soon.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="services">Sunday Services</option>
                        <option value="classes">Classes & Education</option>
                        <option value="treatment">Spiritual Mind Treatment</option>
                        <option value="donate">Donations</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button type="submit" className="btn-primary gap-2 w-full md:w-auto">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
