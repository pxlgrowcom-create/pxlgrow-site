export const metadata = {
  title: 'Etsy SEO & Store Management | PxlGrow',
  description: 'Full-cycle Etsy management: SEO, listing optimization, Etsy Ads, daily admin. +180% sales growth.',
  alternates: { canonical: '/services/etsy' },
  openGraph: {
    title: 'Etsy SEO & Store Management | PxlGrow',
    description: 'Full-cycle Etsy management: SEO, listing optimization, Etsy Ads, daily admin. +180% sales growth.',
    url: 'https://pxlgrow.com/services/etsy',
  },
}

export default function Layout({ children }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Etsy SEO & Store Management",
    "description": "Full-cycle Etsy store management: SEO optimization of titles, tags, and descriptions, Etsy Ads management, daily store administration. Average +180% sales growth.",
    "provider": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "areaServed": "Worldwide",
    "offers": {"@type": "Offer", "price": "50", "priceCurrency": "USD"}
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type":"Question","name":"How many listings can you optimize?","acceptedAnswer":{"@type":"Answer","text":"Unlimited in SEO and Admin packages. We start with top 20 listings by potential, then scale to the entire catalog."}},{"@type":"Question","name":"How fast will I see results on Etsy?","acceptedAnswer":{"@type":"Answer","text":"SEO gives first results in 2-3 weeks. Stable growth in 2-3 months. Average ROI after 6 months is 12x."}},{"@type":"Question","name":"Do you manage Etsy Ads?","acceptedAnswer":{"@type":"Answer","text":"Yes, Etsy Ads management is included in SEO and Admin packages. We optimize based on ROAS data, not guesswork."}}]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      {children}
    </>
  )
}
