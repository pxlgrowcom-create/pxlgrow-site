export const metadata = {
  title: 'Contact Us | PxlGrow',
  description: 'Get a free audit. Fill the form — we respond within 24 hours.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | PxlGrow',
    description: 'Get a free audit. Fill the form — we respond within 24 hours.',
    url: 'https://pxlgrow.com/contact',
  },
}

export default function Layout({ children }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type":"Question","name":"How much do your services cost?","acceptedAnswer":{"@type":"Answer","text":"CRO audit — $199 one-time, Meta Ads management — from $399/month, Etsy store analysis — $50. First audit is free."}},
      {"@type":"Question","name":"How fast will I see results?","acceptedAnswer":{"@type":"Answer","text":"Initial improvements in 2-4 weeks. Significant results in 2-3 months. 90% of clients see positive ROI in the first 3 months."}},
      {"@type":"Question","name":"Do you work with small stores?","acceptedAnswer":{"@type":"Answer","text":"Yes! We work with product businesses of any size — from new Etsy stores to established e-commerce brands."}},
      {"@type":"Question","name":"What reports do you provide?","acceptedAnswer":{"@type":"Answer","text":"Weekly mini-reports with key metrics + detailed monthly report with full analytics, recommendations, and next steps."}},
      {"@type":"Question","name":"Is there a results guarantee?","acceptedAnswer":{"@type":"Answer","text":"90% of our clients see positive ROI in the first 3 months. We use data-driven approach to minimize risks."}}
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      {children}
    </>
  )
}
