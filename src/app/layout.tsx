import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DK Architecture',
  description: "Bureau d'architecture François Kerremans — Chastre, Brabant wallon",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
