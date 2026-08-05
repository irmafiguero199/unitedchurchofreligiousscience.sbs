import { Helmet } from 'react-helmet-async'

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "United Church of Religious Science",
    "alternateName": "Center For Positive Living Ventura",
    "url": "https://unitedchurchofreligiousscience.sbs",
    "logo": "https://unitedchurchofreligiousscience.sbs/logo.svg",
    "email": "admin@unitedchurchofreligiousscience.sbs",
    "telephone": "+1-805-643-1933",
    "taxID": "77-0003763",
    "sameAs": [
      "https://unitedchurchofreligiousscience.sbs"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2646 Palma Dr Ste 250",
      "addressLocality": "Ventura",
      "addressRegion": "CA",
      "postalCode": "93003-7739",
      "addressCountry": "US"
    },
    "foundingDate": "1984",
    "description": "A 501(c)(3) spiritual community in Ventura, CA dedicated to the teachings of Ernest Holmes and the Science of Mind. Tax-exempt since September 1984.",
    "areaServed": {
      "@type": "City",
      "name": "Ventura",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}
