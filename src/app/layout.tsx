import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DK Architecture — Chastre | Construction & rénovation en Brabant wallon',
  description: "DK Architecture, bureau d'architecture de François Kerremans à Chastre. Construction neuve, rénovations, extensions, permis d'urbanisme en Brabant wallon.",
  keywords: 'DK Architecture, architecte Chastre, architecte Brabant wallon, François Kerremans',
  authors: [{ name: 'DK Architecture — François Kerremans' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'DK Architecture — Chastre, Brabant wallon',
    description: 'Construction neuve, rénovation, extension, permis d\'urbanisme. Devis gratuit.',
    locale: 'fr_BE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Architect',
              name: 'DK Architecture',
              description: "Bureau d'architecture de François Kerremans à Chastre",
              founder: 'François Kerremans',
              areaServed: ['Chastre', 'Brabant wallon', 'Wavre', 'Gembloux', 'Ottignies-Louvain-la-Neuve', 'Perwez'],
              address: { '@type': 'PostalAddress', addressLocality: 'Chastre', postalCode: '1450', addressRegion: 'Brabant wallon', addressCountry: 'BE' },
              telephone: '+32 498 34 26 07',
              email: 'fk@dkarchitecture.be',
              priceRange: '€€',
              openingHours: 'Mo-Fr 09:00-18:00',
            }),
          }}
        />
      </head>
      <body className="bg-paper text-ink">{children}</body>
    </html>
  )
}
