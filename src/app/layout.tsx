import type { Metadata } from 'next'
import { Cinzel, Josefin_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['600', '700'],
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['300', '400', '600', '700'],
})

const SITE_URL = 'https://www.kerremans-architecte.be'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Architecte à Chastre & Gembloux — François Kerremans | Brabant wallon',
  description: "Architecte à Chastre et Gembloux — construction neuve, rénovation, extension, permis d'urbanisme en Brabant wallon. François Kerremans. Devis gratuit.",
  keywords: 'architecte Chastre, architecte Walhain, architecte Gembloux, architecte Perwez, architecte Brabant wallon, construction neuve Chastre Walhain Gembloux, maison passive Brabant wallon, maison ossature bois Brabant wallon, construction paille biosourcée Belgique, rénovation extension architecte, permis urbanisme Brabant wallon, éco-responsable construction Chastre, François Kerremans architecte',
  authors: [{ name: 'François Kerremans' }],
  robots: 'index, follow',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Architecte à Chastre & Gembloux — François Kerremans | Brabant wallon',
    description: "Construction neuve, rénovation, extension, permis d'urbanisme à Chastre, Gembloux et Brabant wallon. Devis gratuit.",
    locale: 'fr_BE',
    siteName: 'François Kerremans Architecture',
    images: [
      {
        url: '/photos/realisation-bw/maison-contemporaine-bardage-bois-terrasse-brabant-wallon.jpg',
        width: 1200,
        height: 630,
        alt: 'François Kerremans — Maison contemporaine avec bardage bois, réalisation en Brabant wallon',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${josefinSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Architect', 'LocalBusiness'],
              name: 'François Kerremans Architecture',
              description: "Architecte à Chastre, Brabant wallon. Construction neuve, rénovation, extension et permis d'urbanisme.",
              url: 'https://www.kerremans-architecte.be',
              logo: 'https://www.kerremans-architecte.be/logo-mark.png',
              image: 'https://www.kerremans-architecte.be/photos/realisation-bw/maison-contemporaine-bardage-bois-terrasse-brabant-wallon.jpg',
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
                { '@type': 'City', name: 'Walhain' },
                { '@type': 'City', name: 'Gembloux' },
                { '@type': 'City', name: 'Perwez' },
                { '@type': 'City', name: 'Sombreffe' },
                { '@type': 'City', name: 'Court-Saint-Étienne' },
                { '@type': 'City', name: 'Nil-Saint-Vincent-Saint-Martin' },
                { '@type': 'City', name: 'Wavre' },
                { '@type': 'City', name: 'Ottignies-Louvain-la-Neuve' },
                { '@type': 'AdministrativeArea', name: 'Brabant wallon' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services architecturaux',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction neuve', description: "Conception de maisons et bâtiments sur mesure à Chastre, Walhain, Gembloux et en Brabant wallon, du concept au permis d'urbanisme" } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation & extension', description: 'Rénovations, transformations et extensions avec matériaux biosourcés et conformes PEB' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction écologique', description: "Ossature bois, isolation paille, chanvre, maison passive, BBC — construction éco-responsable en Brabant wallon" } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Permis d'urbanisme", description: "Constitution des dossiers de permis d'urbanisme en Brabant wallon" } },
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
                  acceptedAnswer: { '@type': 'Answer', text: "Les honoraires représentent généralement entre 8 % et 12 % du coût total des travaux pour une mission complète. Le premier rendez-vous est gratuit et sans engagement." },
                },
                {
                  '@type': 'Question',
                  name: "Quel est le délai pour obtenir un permis d'urbanisme en Brabant wallon ?",
                  acceptedAnswer: { '@type': 'Answer', text: "Le délai légal est de 60 jours pour les dossiers simples et de 115 jours pour les dossiers soumis à enquête publique, à compter du dépôt du dossier complet." },
                },
                {
                  '@type': 'Question',
                  name: "Dans quelles communes François Kerremans intervient-il ?",
                  acceptedAnswer: { '@type': 'Answer', text: "François Kerremans est basé à Chastre (Villeroux-Blanmont) et intervient à Walhain, Gembloux, Perwez, Sombreffe, Court-Saint-Étienne, Nil-Saint-Vincent-Saint-Martin et dans l'ensemble du Brabant wallon." },
                },
                {
                  '@type': 'Question',
                  name: "Proposez-vous des constructions biosourcées et éco-responsables ?",
                  acceptedAnswer: { '@type': 'Answer', text: "Oui — c'est une spécialité. François Kerremans maîtrise l'ossature bois, l'isolation en bottes de paille, la fibre de bois et le chanvre pour atteindre des niveaux PEB A, maison passive ou BBC en Brabant wallon." },
                },
                {
                  '@type': 'Question',
                  name: "Qu'est-ce qu'une maison passive et est-ce adapté en Brabant wallon ?",
                  acceptedAnswer: { '@type': 'Answer', text: "Une maison passive minimise ses besoins en chauffage grâce à une isolation poussée, une étanchéité à l'air et une ventilation double flux. En Brabant wallon, le climat s'y prête parfaitement et des primes énergie wallonnes sont disponibles." },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VX50WEJ4HX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VX50WEJ4HX');
          `}
        </Script>
      </body>
    </html>
  )
}
