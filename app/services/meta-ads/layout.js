export const metadata = {
  title: 'Meta Ads — Facebook & Instagram Ads | PxlGrow',
  description: 'ROI-focused Meta Ads management. Advantage+ campaigns, retargeting. Average ROAS 4.2x.',
  alternates: { canonical: '/services/meta-ads' },
  openGraph: {
    title: 'Meta Ads — Facebook & Instagram Ads | PxlGrow',
    description: 'ROI-focused Meta Ads management. Advantage+ campaigns, retargeting. Average ROAS 4.2x.',
    url: 'https://pxlgrow.com/services/meta-ads',
  },
}

export default function Layout({ children }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Meta Ads Management",
    "description": "ROI-focused Facebook and Instagram advertising. Advantage+ Shopping campaigns, dynamic retargeting, UGC creative strategy. Average client ROAS 4.2x.",
    "provider": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "areaServed": "Worldwide",
    "offers": {"@type": "Offer", "price": "399", "priceCurrency": "USD"}
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{"@type":"Question","name":"What is your average ROAS?","acceptedAnswer":{"@type":"Answer","text":"Average ROAS across our clients is 4.2x. Top performers reach 5-8x with hybrid Advantage+ and manual retargeting strategy."}},{"@type":"Question","name":"Do you manage creative production?","acceptedAnswer":{"@type":"Answer","text":"Yes. We handle UGC video creation, carousel design, and A/B testing of creatives. Minimum 5 creatives at launch, refreshed every 2-3 weeks."}},{"@type":"Question","name":"What is the minimum ad budget?","acceptedAnswer":{"@type":"Answer","text":"We recommend minimum $2,000/month ad spend for meaningful results. Our management fee starts at $399/month."}}]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      {children}
    </>
  )
}
