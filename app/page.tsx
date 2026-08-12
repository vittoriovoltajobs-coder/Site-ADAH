// ============================================================
// PAGE PRINCIPALE DU SITE
// Ce fichier assemble toutes les sections dans l'ordre où elles
// apparaissent sur la page. Pour changer l'ordre des sections,
// change simplement l'ordre des lignes ci-dessous (entre <main> et </main>).
// Pour supprimer une section, supprime sa ligne d'import (en haut)
// ET sa ligne d'affichage (ci-dessous).
// ============================================================

import { SiteHeader } from '@/components/site-header'       // Menu de navigation en haut
import { HeroSection } from '@/components/hero-section'     // Grande image + titre d'accueil
import { AboutSection } from '@/components/about-section'   // Section "Le Collectif" / à propos
import { ArtistsSection } from '@/components/artists-section' // Section "Nos Artistes"
import { EventsSection } from '@/components/events-section'   // Section "Expositions & News"
import { ContactSection } from '@/components/contact-section'  // Formulaire de contact
import { SiteFooter } from '@/components/site-footer'        // Pied de page

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
        <EventsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
