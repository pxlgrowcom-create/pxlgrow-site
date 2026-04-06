export const metadata = {
  title: "Why Big Etsy Stores Crashed in 2026 and What to Do | PxlGrow",
  description: "Full guide on Etsy algorithm changes 2025-2026. Why traffic dropped 30-70% for big stores and recovery strategy based on practitioner data.",
  alternates: { canonical: "/blog/etsy-crisis-2026" },
  openGraph: {
    title: "Why Big Etsy Stores Crashed and What to Do About It",
    description: "Etsy algorithm changes 2025-2026: visual ranking, new title rules, recovery strategy.",
    url: "https://pxlgrow.com/blog/etsy-crisis-2026",
    type: "article",
  },
}

export default function Layout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Big Etsy Stores Crashed in 2026 and What to Do",
    "description": "Full guide on Etsy algorithm changes 2025-2026. Recovery strategy based on practitioner data.",
    "datePublished": "2026-03-10",
    "author": {"@type": "Organization", "name": "PxlGrow", "url": "https://pxlgrow.com"},
    "publisher": {"@type": "Organization", "name": "PxlGrow", "logo": {"@type": "ImageObject", "url": "https://pxlgrow.com/icon-512.png"}},
    "mainEntityOfPage": "https://pxlgrow.com/blog/etsy-crisis-2026"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
      {children}
    </>
  )
}
