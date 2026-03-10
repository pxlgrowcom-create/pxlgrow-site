export const metadata = {
  title: 'Heatmap Analysis: What Your Visitors Actually Do | PxlGrow',
  description: 'How heatmaps help find UX problems. Click maps, scroll maps, session recordings.',
  alternates: { canonical: '/blog/heatmap-analysis' },
  openGraph: {
    title: 'Heatmap Analysis: What Your Visitors Actually Do | PxlGrow',
    description: 'How heatmaps help find UX problems. Click maps, scroll maps, session recordings.',
    url: 'https://pxlgrow.com/blog/heatmap-analysis',
    type: 'article',
  },
}

export default function Layout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Heatmap Analysis: What Your Visitors Actually Do | PxlGrow",
    "description": "How heatmaps help find UX problems. Click maps, scroll maps, session recordings.",
    "datePublished": "2026-01-14",
    "author": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "publisher": {"@type": "Organization", "name": "PxlGrow", "logo": {"@type": "ImageObject", "url": "https://pxlgrow.com/icon-512.png"}},
    "mainEntityOfPage": "https://pxlgrow.com/blog/heatmap-analysis"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      {children}
    </>
  )
}
