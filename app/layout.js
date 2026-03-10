import './globals.css'

export const metadata = {
  title: {
    default: 'PxlGrow — Data-Driven Marketing Agency | CRO, Meta Ads, Etsy SEO',
    template: '%s | PxlGrow'
  },
  description: 'PxlGrow — data-driven marketing agency. CRO optimization, Meta Ads management, Etsy SEO. We grow e-commerce sales based on data, not guesses.',
  keywords: 'CRO, conversion rate optimization, Meta Ads, Facebook Ads, Etsy SEO, Etsy management, digital marketing agency, e-commerce optimization',
  authors: [{ name: 'PxlGrow' }],
  creator: 'PxlGrow',
  metadataBase: new URL('https://pxlgrow.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PxlGrow — Data-Driven Marketing Agency',
    description: 'CRO, Meta Ads, Etsy SEO — we grow e-commerce sales based on data.',
    url: 'https://pxlgrow.com',
    siteName: 'PxlGrow',
    locale: 'uk_UA',
    type: 'website',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'PxlGrow' }],
  },
  twitter: {
    card: 'summary',
    title: 'PxlGrow — Data-Driven Marketing Agency',
    description: 'CRO, Meta Ads, Etsy SEO — data-driven marketing agency',
    images: ['/icon-512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PxlGrow",
    "url": "https://pxlgrow.com",
    "logo": "https://pxlgrow.com/icon-512.png",
    "description": "Data-driven marketing agency. CRO optimization, Meta Ads management, Etsy SEO.",
    "email": "hello@pxlgrow.com",
    "sameAs": [],
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CRO & Conversion Optimization"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Meta Ads Management"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Etsy SEO & Store Management"}}
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PxlGrow",
    "url": "https://pxlgrow.com",
    "description": "Data-driven marketing agency"
  }

  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(orgSchema)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
