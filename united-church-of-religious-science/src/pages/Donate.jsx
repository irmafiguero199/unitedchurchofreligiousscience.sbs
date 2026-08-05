import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Heart, ShieldCheck, CheckCircle, Mail, Building, CreditCard, Gift } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const amounts = [25, 50, 100, 250, 500, 1000]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [frequency, setFrequency] = useState('one-time')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount

  return (
    <>
      <Helmet>
        <title>Donate | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Support the United Church of Religious Science, a 501(c)(3) tax-exempt nonprofit (EIN: 77-0003763). Your donation is tax-deductible. 2646 Palma Dr Ste 250, Ventura, CA 93003-7739." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/donate" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-800 rounded-full px-4 py-1.5 mb-6 text-sm">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-accent-300">501(c)(3) Tax-Deductible | EIN: 77-0003763</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-lg text-primary-200 leading-relaxed">
              Your generous donation helps us continue providing spiritual education, community outreach, 
              and transformative programs in Ventura County. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-sage-50 rounded-xl p-10 border border-sage-100 text-center">
                  <CheckCircle className="w-16 h-16 text-sage-600 mx-auto mb-4" />
                  <h2 className="font-serif text-2xl font-bold text-primary-900 mb-2">Thank You for Your Generosity</h2>
                  <p className="text-primary-600 mb-6">
                    Your commitment to the United Church of Religious Science is deeply appreciated. 
                    A tax-deductible receipt will be sent to your email.
                  </p>
                  <div className="text-sm text-primary-500 space-y-1">
                    <p>United Church of Religious Science | EIN: 77-0003763</p>
                    <p>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-primary-100 shadow-sm p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">Make a Donation</h2>

                  {/* Frequency */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-primary-700 mb-2">Donation Frequency</label>
                    <div className="flex gap-2">
                      {['one-time', 'monthly', 'annual'].map((freq) => (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setFrequency(freq)}
                          className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium capitalize transition-colors ${
                            frequency === freq
                              ? 'bg-primary-900 text-white'
                              : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                          }`}
                        >
                          {freq === 'one-time' ? 'One-Time' : freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-primary-700 mb-2">Select Amount</label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {amounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => { setSelectedAmount(amount); setCustomAmount('') }}
                          className={`py-3 rounded-lg text-sm font-semibold transition-colors ${
                            selectedAmount === amount && !customAmount
                              ? 'bg-accent-500 text-primary-900'
                              : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400">$</span>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                      />
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">First Name</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Last Name</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-primary-700 mb-1">Email</label>
                      <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-primary-700 mb-1">Address</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400" />
                    </div>
                  </div>

                  <button type="submit" className="btn-accent gap-2 w-full text-lg py-4">
                    <Heart className="w-5 h-5" />
                    Donate ${finalAmount || 0} {frequency !== 'one-time' && `(${frequency})`}
                  </button>

                  <p className="text-xs text-primary-400 text-center mt-4">
                    This is a demonstration form. Connect your preferred payment processor (Stripe, PayPal, etc.) for live donations.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-accent-600" />
                  <h3 className="font-semibold text-primary-900">Tax-Deductible</h3>
                </div>
                <p className="text-sm text-primary-600 leading-relaxed">
                  The United Church of Religious Science is a registered 501(c)(3) nonprofit organization. 
                  All donations are tax-deductible to the fullest extent allowed by law. 
                  <strong> EIN: 77-0003763</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-primary-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-5 h-5 text-primary-700" />
                  <h3 className="font-semibold text-primary-900">Other Ways to Give</h3>
                </div>
                <div className="space-y-4 text-sm text-primary-600">
                  <div>
                    <h4 className="font-medium text-primary-900">By Check</h4>
                    <p>Mail checks payable to "United Church of Religious Science" to:</p>
                    <p className="mt-1">2646 Palma Dr Ste 250<br />Ventura, CA 93003-7739</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Employer Matching</h4>
                    <p>Many employers match charitable donations. Contact your HR department and provide our EIN: 77-0003763.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Legacy Giving</h4>
                    <p>Include the United Church of Religious Science in your estate planning. Contact us for more information.</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent-50 rounded-xl p-6 border border-accent-100">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-accent-600" />
                  <h3 className="font-semibold text-primary-900">Questions?</h3>
                </div>
                <p className="text-sm text-primary-600 mb-3">
                  Contact us for donation assistance, legacy giving information, or employer matching details.
                </p>
                <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-sm text-accent-600 hover:underline font-medium">
                  admin@unitedchurchofreligiousscience.sbs
                </a>
              </div>

              <div className="bg-primary-900 rounded-xl p-6 text-white text-center">
                <Gift className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                <h3 className="font-serif font-bold text-lg mb-1">Your Impact</h3>
                <p className="text-sm text-primary-200">
                  Every dollar supports Sunday services, spiritual education classes, community outreach, 
                  and pastoral care for those in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
