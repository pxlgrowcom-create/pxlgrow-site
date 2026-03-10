export const metadata = {
  title: 'CRO & Conversion Optimization | PxlGrow',
  description: 'Increase conversions by 50-300% through A/B testing, UX analysis, heatmaps. Shopify, WooCommerce.',
  alternates: { canonical: '/services/cro' },
  openGraph: {
    title: 'CRO & Conversion Optimization | PxlGrow',
    description: 'Increase conversions by 50-300% through A/B testing, UX analysis, heatmaps. Shopify, WooCommerce.',
    url: 'https://pxlgrow.com/services/cro',
  },
}

export default function Layout({ children }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CRO & Conversion Optimization",
    "description": "Increase e-commerce conversions by 50-300% through A/B testing, UX/UI analysis, heatmaps, session recordings, and data-driven checkout optimization.",
    "provider": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "areaServed": "Worldwide",
    "offers": {"@type": "Offer", "price": "199", "priceCurrency": "USD"}
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type":"Question","name":"What does a CRO audit include?","acceptedAnswer":{"@type":"Answer","text":"Full UX/UI analysis, heatmap analysis with 1000+ sessions, conversion funnel analysis, mobile version audit, and a prioritized report with recommendations."}},{"@type":"Question","name":"How fast will I see results?","acceptedAnswer":{"@type":"Answer","text":"Initial improvements in 2-4 weeks. Average client result is 150-300% conversion growth in 2-3 months."}},{"@type":"Question","name":"What platforms do you work with?","acceptedAnswer":{"@type":"Answer","text":"Shopify, WooCommerce, custom e-commerce platforms. Every decision is backed by analytics."}}]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      {children}
    </>
  )
}
