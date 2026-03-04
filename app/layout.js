import './globals.css'

export const metadata = {
  title: 'PxlGrow - Data-Driven Marketing Agency',
  description: 'CRO, Meta Ads, Etsy SEO - data-driven marketing agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;family=Syne:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
