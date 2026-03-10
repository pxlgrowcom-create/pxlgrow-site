export const metadata = {
  title: 'Facebook Pixel & CAPI: Complete Setup Guide | PxlGrow',
  description: 'Server-side tracking for accurate attribution.',
  alternates: { canonical: '/blog/facebook-pixel-capi-guide' },
  openGraph: {
    title: 'Facebook Pixel & CAPI: Complete Setup Guide | PxlGrow',
    description: 'Server-side tracking for accurate attribution.',
    url: 'https://pxlgrow.com/blog/facebook-pixel-capi-guide',
    type: 'article',
  },
}

export default function Layout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Facebook Pixel & CAPI: Complete Setup Guide | PxlGrow",
    "description": "Server-side tracking for accurate attribution.",
    "datePublished": "2026-01-07",
    "author": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "publisher": {"@type": "Organization", "name": "PxlGrow", "logo": {"@type": "ImageObject", "url": "https://pxlgrow.com/icon-512.png"}},
    "mainEntityOfPage": "https://pxlgrow.com/blog/facebook-pixel-capi-guide"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      {children}
    </>
  )
}
