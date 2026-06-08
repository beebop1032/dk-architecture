import type { Metadata } from 'next'
import { Cinzel, Josefin_Sans } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700'],
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['300', '400', '500', '600', '700'],
})

const SITE_URL = 'https://www.dkarchitecture.be'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Architecte à Chastre & Gembloux — DK Architecture | Brabant wallon',
  description: "Architecte à Chastre et Gembloux — construction neuve, rénovation, extension, permis d'urbanisme en Brabant wallon. François Kerremans. Devis gratuit.",
  keywords: 'architecte Chastre, architecte Gembloux, architecte Brabant wallon, construction neuve Chastre Gembloux, rénovation extension architecte, permis urbanisme Brabant wallon, François Kerremans architecte',
  authors: [{ name: 'François Kerremans — DK Architecture' }],
  robots: 'index, follow',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Architecte à Chastre & Gembloux — DK Architecture | Brabant wallon',
    description: "Construction neuve, rénovation, extension, permis d'urbanisme à Chastre, Gembloux et Brabant wallon. Devis gratuit.",
    locale: 'fr_BE',
    siteName: 'DK Architecture',
    images: [
      {
        url: '/photos/realisation-bw/maison-contemporaine-bardage-bois-terrasse-brabant-wallon.jpg',
        width: 1200,
        height: 630,
        alt: 'DK Architecture — Maison contemporaine avec bardage bois, réalisation en Brabant wallon',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${josefinSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Architect', 'LocalBusiness'],
              name: 'DK Architecture',
              alternateName: 'DK architecture — François Kerremans',
              description: "Bureau d'architecture à Chastre, Brabant wallon. Construction neuve, rénovation, extension et permis d'urbanisme.",
              url: 'https://www.dkarchitecture.be',
              logo: 'https://www.dkarchitecture.be/logo-mark.png',
              image: 'https://www.dkarchitecture.be/photos/realisation-bw/maison-contemporaine-bardage-bois-terrasse-brabant-wallon.jpg',
              founder: { '@type': 'Person', name: 'François Kerremans', jobTitle: 'Architecte' },
              employee: { '@type': 'Person', name: 'François Kerremans', jobTitle: 'Architecte agréé Ordre des Architectes de Belgique' },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Villeroux-Blanmont',
                addressLocality: 'Chastre',
                postalCode: '1450',
                addressRegion: 'Brabant wallon',
                addressCountry: 'BE',
              },
              geo: { '@type': 'GeoCoordinates', latitude: 50.5986, longitude: 4.6383 },
              telephone: '+32498342607',
              email: 'fk@dkarchitecture.be',
              priceRange: '€€',
              openingHours: 'Mo-Fr 09:00-18:00',
              areaServed: [
                { '@type': 'City', name: 'Chastre' },
                { '@type': 'City', name: 'Gembloux' },
                { '@type': 'AdministrativeArea', name: 'Brabant wallon' },
                { '@type': 'City', name: 'Wavre' },
                { '@type': 'City', name: 'Ottignies-Louvain-la-Neuve' },
                { '@type': 'City', name: 'Perwez' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services architecturaux',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction neuve', description: "Conception de maisons et bâtiments sur mesure, du concept au permis d'urbanisme" } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation & extension', description: 'Rénovations, transformations et extensions qui valorisent votre bien' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Permis d'urbanisme", description: "Constitution des dossiers de permis d'urbanisme" } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suivi de chantier', description: "Contrôle de l'exécution jusqu'à la réception des travaux" } },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: "Quand est-il obligatoire de faire appel à un architecte en Belgique ?",
                  acceptedAnswer: { '@type': 'Answer', text: "En Belgique, le recours à un architecte inscrit à l'Ordre est obligatoire pour tout acte de bâtir soumis à permis d'urbanisme : construction neuve, transformation importante, extension, changement de destination." },
                },
                {
                  '@type': 'Question',
                  name: "Combien coûtent les honoraires d'un architecte en Brabant wallon ?",
                  acceptedAnswer: { '@type': 'Answer', text: "Les honoraires représentent généralement entre 8 % et 12 % du coût total des travaux pour une mission complète. Le premier rendez-vous chez DK architecture est gratuit et sans engagement." },
                },
                {
                  '@type': 'Question',
                  name: "Quel est le délai pour obtenir un permis d'urbanisme en Brabant wallon ?",
                  acceptedAnswer: { '@type': 'Answer', text: "Le délai légal est de 60 jours pour les dossiers simples et de 115 jours pour les dossiers soumis à enquête publique, à compter du dépôt du dossier complet." },
                },
                {
                  '@type': 'Question',
                  name: "DK architecture travaille-t-il uniquement à Chastre et Gembloux ?",
                  acceptedAnswer: { '@type': 'Answer', text: "Non, DK architecture intervient principalement sur l'axe Chastre–Gembloux mais aussi dans l'ensemble du Brabant wallon : Wavre, Ottignies-Louvain-la-Neuve, Perwez, Court-Saint-Étienne et au-delà." },
                },
                {
                  '@type': 'Question',
                  name: "Proposez-vous des constructions biosourcées (paille, bois, chanvre) ?",
                  acceptedAnswer: { '@type': 'Answer', text: "Oui. François Kerremans a une expérience concrète dans les constructions biosourcées : ossature bois, isolation paille, fibre de bois, intégrables en construction neuve ou rénovation." },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-paper text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  )
}
