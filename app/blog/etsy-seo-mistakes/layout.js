export const metadata = {
  title: '10 Etsy SEO Mistakes Killing Your Sales | PxlGrow',
  description: 'Most Etsy sellers make the same SEO mistakes. Top-10 analysis.',
  alternates: { canonical: '/blog/etsy-seo-mistakes' },
  openGraph: {
    title: '10 Etsy SEO Mistakes Killing Your Sales | PxlGrow',
    description: 'Most Etsy sellers make the same SEO mistakes. Top-10 analysis.',
    url: 'https://pxlgrow.com/blog/etsy-seo-mistakes',
    type: 'article',
  },
}

export default function Layout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10 Etsy SEO Mistakes Killing Your Sales | PxlGrow",
    "description": "Most Etsy sellers make the same SEO mistakes. Top-10 analysis.",
    "datePublished": "2026-02-12",
    "author": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "publisher": {"@type": "Organization", "name": "PxlGrow", "logo": {"@type": "ImageObject", "url": "https://pxlgrow.com/icon-512.png"}},
    "mainEntityOfPage": "https://pxlgrow.com/blog/etsy-seo-mistakes"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      {children}
    </>
  )
}
