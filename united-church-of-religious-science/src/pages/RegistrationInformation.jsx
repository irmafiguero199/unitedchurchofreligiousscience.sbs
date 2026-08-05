import { Helmet } from 'react-helmet-async'
import { ShieldCheck, FileText, Users, MapPin, Calendar, Mail, Phone, Download } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

export default function RegistrationInformation() {
  return (
    <>
      <Helmet>
        <title>Registration Information | United Church of Religious Science | EIN 77-0003763</title>
        <meta name="description" content="Official registration information for United Church of Religious Science: EIN 77-0003763, 501(c)(3) tax-exempt since 1984, 2646 Palma Dr Ste 250, Ventura, CA 93003-7739." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/registration" />
      </Helmet>

      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-800 rounded-full px-4 py-1.5 mb-6 text-sm">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-accent-300">Official Registration & Compliance</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Registration Information</h1>
            <p className="text-lg text-primary-200">
              Official federal and state registration details for the United Church of Religious Science.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto space-y-10">

          <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-accent-400" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-900">Federal Tax Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-primary-900 mb-1">Employer Identification Number (EIN)</h4>
                <p className="text-3xl font-mono font-bold text-primary-900 tracking-wider">77-0003763</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-1">IRS Tax Status</h4>
                <p className="text-primary-700">501(c)(3) Tax-Exempt Religious Organization</p>
                <p className="text-primary-500 text-xs mt-1">Tax-exempt since September 1984</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-1">IRS Determination</h4>
                <p className="text-primary-700">Recognized as a church under IRC Section 501(c)(3). Churches are automatically tax-exempt under IRC Section 508(c)(1)(A) and are not required to file Form 990.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-1">Donation Deductibility</h4>
                <p className="text-primary-700">All charitable contributions are tax-deductible under Section 170 of the Internal Revenue Code.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-primary-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-900">State Registration</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-primary-900 mb-1">State of Incorporation</h4>
                <p className="text-primary-700">California</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-1">Year of Incorporation</h4>
                <p className="text-primary-700">1984</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-1">Entity Type</h4>
                <p className="text-primary-700">Religious Corporation / Nonprofit Religious Organization</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-1">Good Standing</h4>
                <p className="text-primary-700">The organization maintains good standing with the California Secretary of State and the Franchise Tax Board.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-primary-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sage-50 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-sage-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-900">Registered Address</h2>
            </div>
            <div className="text-primary-700 text-sm leading-relaxed">
              <p className="font-semibold text-primary-900">United Church of Religious Science</p>
              <p>2646 Palma Dr Ste 250</p>
              <p>Ventura, CA 93003-7739</p>
              <p>United States</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="tel:+18056431933" className="flex items-center gap-1.5 text-accent-600 hover:underline">
                  <Phone className="w-4 h-4" /> (805) 643-1933
                </a>
                <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="flex items-center gap-1.5 text-accent-600 hover:underline">
                  <Mail className="w-4 h-4" /> admin@unitedchurchofreligiousscience.sbs
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-primary-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-700" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-900">Governance</h2>
            </div>
            <div className="text-sm text-primary-700 space-y-3">
              <p>The United Church of Religious Science is governed by an elected Board of Directors in accordance with our bylaws and California nonprofit corporation law.</p>
              <p><strong>Board President:</strong> Elected annually by the congregation. Provides strategic leadership and governance oversight.</p>
              <p><strong>Senior Minister:</strong> Licensed by Centers for Spiritual Living. Serves as the spiritual and administrative leader of the congregation.</p>
              <p><strong>Board Meetings:</strong> Held monthly on the third Thursday at 6:00 PM at our registered address. Open to members.</p>
            </div>
          </div>

          <div className="bg-accent-50 rounded-xl p-8 border border-accent-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Calendar className="w-5 h-5 text-accent-600" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary-900">Annual Reports & Filings</h2>
            </div>
            <div className="text-sm text-primary-700 space-y-3">
              <p>As a church recognized under IRC Section 501(c)(3), we are not required to file annual Form 990 returns with the IRS. However, we maintain detailed financial records and provide annual reports to our congregation and donors upon request.</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-accent-200 text-accent-700 text-xs">
                  <Download className="w-4 h-4" /> Annual Report 2025 (PDF) — Available upon request
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-accent-200 text-accent-700 text-xs">
                  <Download className="w-4 h-4" /> Bylaws (PDF) — Available upon request
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-2">To request copies of our annual report, bylaws, or financial statements, please email <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-accent-600 hover:underline">admin@unitedchurchofreligiousscience.sbs</a>.</p>
            </div>
          </div>

          <div className="bg-primary-900 rounded-xl p-8 text-white text-center">
            <ShieldCheck className="w-10 h-10 text-accent-400 mx-auto mb-3" />
            <h2 className="font-serif text-xl font-bold mb-2">Verify Our Status</h2>
            <p className="text-primary-200 text-sm max-w-xl mx-auto mb-4">
              The United Church of Religious Science is a legitimate 501(c)(3) tax-exempt religious organization.
              Our EIN 77-0003763 can be verified through the IRS Business Master File and ProPublica Nonprofit Explorer.
            </p>
            <div className="text-xs text-primary-300 space-y-1">
              <p>Organization: United Church of Religious Science</p>
              <p>EIN: 77-0003763</p>
              <p>Address: 2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
              <p>Email: <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-accent-300 hover:underline">admin@unitedchurchofreligiousscience.sbs</a></p>
              <p>Phone: <a href="tel:+18056431933" className="text-accent-300 hover:underline">(805) 643-1933</a></p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
