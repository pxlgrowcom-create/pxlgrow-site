export const metadata = {
  title: 'How to Increase Conversion by 200% Without New Traffic | PxlGrow',
  description: 'CRO case study: checkout flow optimization doubled conversion in 6 weeks.',
  alternates: { canonical: '/blog/conversion-200-percent' },
  openGraph: {
    title: 'How to Increase Conversion by 200% Without New Traffic | PxlGrow',
    description: 'CRO case study: checkout flow optimization doubled conversion in 6 weeks.',
    url: 'https://pxlgrow.com/blog/conversion-200-percent',
    type: 'article',
  },
}

export default function Layout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Increase Conversion by 200% Without New Traffic | PxlGrow",
    "description": "CRO case study: checkout flow optimization doubled conversion in 6 weeks.",
    "datePublished": "2026-02-05",
    "author": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "publisher": {"@type": "Organization", "name": "PxlGrow", "logo": {"@type": "ImageObject", "url": "https://pxlgrow.com/icon-512.png"}},
    "mainEntityOfPage": "https://pxlgrow.com/blog/conversion-200-percent"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      {children}
    </>
  )
}
