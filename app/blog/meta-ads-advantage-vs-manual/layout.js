export const metadata = {
  title: 'Meta Ads 2026: Advantage+ vs Manual Campaigns | PxlGrow',
  description: 'Comparison on real data from 15+ accounts.',
  alternates: { canonical: '/blog/meta-ads-advantage-vs-manual' },
  openGraph: {
    title: 'Meta Ads 2026: Advantage+ vs Manual Campaigns | PxlGrow',
    description: 'Comparison on real data from 15+ accounts.',
    url: 'https://pxlgrow.com/blog/meta-ads-advantage-vs-manual',
    type: 'article',
  },
}

export default function Layout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Meta Ads 2026: Advantage+ vs Manual Campaigns | PxlGrow",
    "description": "Comparison on real data from 15+ accounts.",
    "datePublished": "2026-01-28",
    "author": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "publisher": {"@type": "Organization", "name": "PxlGrow", "logo": {"@type": "ImageObject", "url": "https://pxlgrow.com/icon-512.png"}},
    "mainEntityOfPage": "https://pxlgrow.com/blog/meta-ads-advantage-vs-manual"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      {children}
    </>
  )
}
