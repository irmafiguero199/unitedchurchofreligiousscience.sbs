import { Helmet } from 'react-helmet-async'
import { ShieldCheck } from 'lucide-react'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | United Church of Religious Science | 501(c)(3) Ventura, CA</title>
        <meta name="description" content="Terms of Service for the United Church of Religious Science, a 501(c)(3) nonprofit organization (EIN: 77-0003763) located at 2646 Palma Dr Ste 250, Ventura, CA 93003-7739." />
        <link rel="canonical" href="https://unitedchurchofreligiousscience.sbs/terms-of-service" />
      </Helmet>

      <section className="bg-primary-900 text-white py-16 md:py-20">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-800 rounded-full px-4 py-1.5 mb-4 text-sm">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-accent-300">EIN: 77-0003763</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-primary-200">Last updated: August 5, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-10">
            <p className="text-primary-700 text-sm leading-relaxed m-0">
              These Terms of Service ("Terms") govern your access to and use of the website and services of 
              <strong> United Church of Religious Science</strong>, a 501(c)(3) tax-exempt religious organization 
              registered in California with Federal Tax ID <strong>EIN: 77-0003763</strong>. Our registered address 
              is <strong>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</strong>. By accessing or using our website 
              at <a href="https://unitedchurchofreligiousscience.sbs" className="text-accent-600 hover:underline">unitedchurchofreligiousscience.sbs</a>, 
              you agree to be bound by these Terms.
            </p>
          </div>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-primary-600 leading-relaxed">
            By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound 
            by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, please do not use 
            our website or services.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">2. Organization Information</h2>
          <p className="text-primary-600 leading-relaxed">
            The United Church of Religious Science is a 501(c)(3) tax-exempt religious organization incorporated in 
            the State of California. Our Federal Employer Identification Number (EIN) is 77-0003763. Our registered 
            office is located at 2646 Palma Dr Ste 250, Ventura, CA 93003-7739. All donations to our organization 
            are tax-deductible to the fullest extent permitted by law under Section 170 of the Internal Revenue Code.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">3. Use of Website</h2>
          <p className="text-primary-600 leading-relaxed">
            You agree to use our website only for lawful purposes and in a manner that does not infringe the rights 
            of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes 
            harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, 
            or disrupting the normal flow of dialogue within our website.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">4. Donations</h2>
          <p className="text-primary-600 leading-relaxed">
            All donations made through our website are voluntary and non-refundable. Donations are processed through 
            secure third-party payment processors. The United Church of Religious Science issues tax-deductible receipts 
            for all qualifying donations. By making a donation, you confirm that you are authorized to use the payment 
            method provided and that the information you supply is true and correct.
          </p>
          <p className="text-primary-600 leading-relaxed mt-4">
            Donations are used to support the religious, educational, and charitable programs of the United Church of 
            Religious Science, including but not limited to Sunday services, spiritual education classes, community 
            outreach, and operational expenses necessary to fulfill our 501(c)(3) mission.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-primary-600 leading-relaxed">
            All content on this website, including text, graphics, logos, images, audio clips, and software, is the 
            property of the United Church of Religious Science or its content suppliers and is protected by United 
            States and international copyright laws. You may not reproduce, distribute, modify, create derivative works 
            of, publicly display, or exploit any content without our prior written consent.
          </p>
          <p className="text-primary-600 leading-relaxed mt-4">
            The teachings of Ernest Holmes and the Science of Mind are in the public domain where applicable. 
            However, our original presentations, recordings, and materials are protected by copyright.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">6. Disclaimer of Warranties</h2>
          <p className="text-primary-600 leading-relaxed">
            Our website and its content are provided on an "as is" and "as available" basis without any warranties 
            of any kind, either express or implied. We do not warrant that the website will be uninterrupted, timely, 
            secure, or error-free. The spiritual content and teachings provided on this website are for educational 
            and inspirational purposes and do not constitute professional medical, psychological, or legal advice.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-primary-600 leading-relaxed">
            To the fullest extent permitted by law, the United Church of Religious Science shall not be liable for 
            any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating 
            to your use of or inability to use our website or services.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">8. Governing Law</h2>
          <p className="text-primary-600 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State of California, 
            without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms 
            shall be brought exclusively in the courts located in Ventura County, California.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-primary-600 leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
            to this page. Your continued use of the website after any changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="font-serif text-2xl font-bold text-primary-900 mt-8 mb-4">10. Contact Information</h2>
          <p className="text-primary-600 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us:
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
