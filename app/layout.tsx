// ============================================================
// FICHIER TECHNIQUE : ce fichier gère les polices, le titre de
// l'onglet du navigateur et la description utilisée par Google.
// Tu n'as normalement pas besoin de toucher aux imports ci-dessous.
// ============================================================

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

// Police pour les titres (élégante, avec empattements)
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Police pour le texte courant (moderne, sans empattements)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

// TITRE ET DESCRIPTION POUR GOOGLE / ONGLET DU NAVIGATEUR
// "title" = ce qui s'affiche dans l'onglet du navigateur et dans Google
// "description" = le petit texte qui apparaît sous le lien dans les résultats Google
// À MODIFIER ICI si tu veux changer ces deux éléments.
export const metadata: Metadata = {
  title: "Adah — Association des Artistes d'Hermance",
  description:
    "Le collectif des Artistes d'Hermance réunit peintres, sculpteurs, céramistes et photographes de la région lémanique. Découvrez nos artistes et nos expositions.",
  generator: 'v0.app',
}

// Couleur de fond affichée dans la barre du navigateur sur mobile
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f6f0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`light bg-background ${playfair.variable} ${montserrat.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
