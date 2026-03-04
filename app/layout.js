import './globals.css'

export const metadata = {
  title: 'PxlGrow — Data-Driven Marketing Agency | CRO, Meta Ads, Etsy SEO',
  description: 'PxlGrow — маркетингова агенція. CRO оптимізація конверсій, Meta Ads управління, Etsy SEO та адміністрування магазинів. Збільшуємо продажі на основі даних.',
  keywords: 'CRO, conversion rate optimization, Meta Ads, Facebook Ads, Etsy SEO, Etsy management, digital marketing agency, e-commerce optimization',
  authors: [{ name: 'PxlGrow' }],
  creator: 'PxlGrow',
  metadataBase: new URL('https://pxlgrow.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PxlGrow — Data-Driven Marketing Agency',
    description: 'CRO, Meta Ads, Etsy SEO — збільшуємо продажі вашого e-commerce бізнесу на основі даних, а не здогадок.',
    url: 'https://pxlgrow.com',
    siteName: 'PxlGrow',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'PxlGrow',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'PxlGrow — Data-Driven Marketing Agency',
    description: 'CRO, Meta Ads, Etsy SEO — data-driven marketing agency',
    images: ['/icon-512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
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
