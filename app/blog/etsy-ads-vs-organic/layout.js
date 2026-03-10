export const metadata = {
  title: 'Etsy Ads vs Organic SEO: Where to Invest? | PxlGrow',
  description: 'ROI analysis across 8 stores over 12 months.',
  alternates: { canonical: '/blog/etsy-ads-vs-organic' },
  openGraph: {
    title: 'Etsy Ads vs Organic SEO: Where to Invest? | PxlGrow',
    description: 'ROI analysis across 8 stores over 12 months.',
    url: 'https://pxlgrow.com/blog/etsy-ads-vs-organic',
    type: 'article',
  },
}

export default function Layout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Etsy Ads vs Organic SEO: Where to Invest? | PxlGrow",
    "description": "ROI analysis across 8 stores over 12 months.",
    "datePublished": "2026-01-20",
    "author": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "publisher": {"@type": "Organization", "name": "PxlGrow", "logo": {"@type": "ImageObject", "url": "https://pxlgrow.com/icon-512.png"}},
    "mainEntityOfPage": "https://pxlgrow.com/blog/etsy-ads-vs-organic"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      {children}
    </>
  )
}
