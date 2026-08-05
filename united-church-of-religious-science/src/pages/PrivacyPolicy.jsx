import { Helmet } from 'react-helmet-async'
import { ShieldCheck } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Privacy Policy of the United Church of Religious Science, a 501(c)(3) nonprofit organization (EIN: 77-0003763) located at 2646 Palma Dr Ste 250, Ventura, CA 93003-7739." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/privacy-policy" />
      </Helmet>

      <section className="bg-primary-900 text-white py-16 md:py-20">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-800 rounded-full px-4 py-1.5 mb-4 text-sm">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-accent-300">EIN: 77-0003763</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-primary-200">Last updated: August 5, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto prose prose-primary max-w-none">
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-10">
            <p className="text-primary-700 text-sm leading-relaxed m-0">
              <strong>United Church of Religious Science</strong> ("we," "us," or "our") is a 501(c)(3) tax-exempt 
              religious organization registered in the State of California with Federal Tax ID <strong>EIN: 77-0003763</strong>. 
              Our registered address is <strong>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</strong>. 
              Our contact email is <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-accent-600 hover:underline">admin@unitedchurchofreligiousscience.sbs</a>. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website <a href="https://unitedchurchofreligiousscience.sbs" className="text-accent-600 hover:underline">unitedchurchofreligiousscience.sbs</a>.
            </p>
          </div>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-primary-600 leading-relaxed">
            We respect your privacy and are committed to protecting your personal data. This Privacy Policy applies 
            to all visitors, donors, members, and users of our website and services. By accessing or using our website, 
            you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-primary-600 leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-primary-600 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and other information you voluntarily provide through contact forms, donation forms, event registrations, or newsletter signups.</li>
            <li><strong>Donation Information:</strong> Payment details processed through secure third-party payment processors. We do not store full credit card numbers on our servers.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience. You can disable cookies through your browser settings.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-primary-600 leading-relaxed">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-primary-600 space-y-2">
            <li>To communicate with you about church services, programs, events, and news</li>
            <li>To process donations and issue tax-deductible receipts</li>
            <li>To respond to your inquiries and provide pastoral support</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal and regulatory obligations as a 501(c)(3) organization</li>
            <li>To maintain membership and volunteer records</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-primary-600 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share information with:
          </p>
          <ul className="list-disc pl-6 text-primary-600 space-y-2">
            <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website, processing donations, or managing communications, subject to confidentiality agreements.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation, or to protect our rights, property, or safety.</li>
            <li><strong>Denominational Affiliates:</strong> Centers for Spiritual Living or other affiliated organizations for denominational reporting purposes, with appropriate safeguards.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">5. Data Security</h2>
          <p className="text-primary-600 leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards to protect your personal 
            information from unauthorized access, alteration, disclosure, or destruction. However, no method of 
            transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">6. Your Rights and Choices</h2>
          <p className="text-primary-600 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-primary-600 space-y-2">
            <li>Access, correct, or delete your personal information</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Request a copy of the data we hold about you</li>
            <li>Object to certain processing of your personal data</li>
          </ul>
          <p className="text-primary-600 leading-relaxed">
            To exercise these rights, please contact us at <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-accent-600 hover:underline">admin@unitedchurchofreligiousscience.sbs</a> 
            or write to us at 2646 Palma Dr Ste 250, Ventura, CA 93003-7739.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">7. Children's Privacy</h2>
          <p className="text-primary-600 leading-relaxed">
            Our website is not directed to children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If you believe we have inadvertently collected such information, 
            please contact us immediately so we can delete it.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">8. Changes to This Policy</h2>
          <p className="text-primary-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated 
            effective date. We encourage you to review this policy periodically.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">9. Contact Us</h2>
          <p className="text-primary-600 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-primary-50 rounded-lg p-5 mt-4 text-sm text-primary-700">
            <p className="font-semibold">United Church of Religious Science</p>
            <p>EIN: 77-0003763</p>
            <p>2646 Palma Dr Ste 250</p>
            <p>Ventura, CA 93003-7739</p>
            <p>Email: <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-accent-600 hover:underline">admin@unitedchurchofreligiousscience.sbs</a></p>
            <p>Phone: <a href="tel:+18056431933" className="text-accent-600 hover:underline">(805) 643-1933</a></p>
          </div>
        </div>
      </section>
    </>
  )
}
