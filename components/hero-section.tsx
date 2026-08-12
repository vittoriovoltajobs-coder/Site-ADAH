// ============================================================
// SECTION D'ACCUEIL (la première chose vue en arrivant sur le site)
// - La grande photo de fond vient de public/images/hero.png
//   → pour la changer, remplace ce fichier par une nouvelle image
//     (même nom "hero.png", ou change le chemin dans src ci-dessous)
// - Le petit texte en majuscules, le grand titre et le paragraphe
//   sont modifiables directement dans le texte ci-dessous
// - Les 2 boutons en bas mènent vers les sections #artistes et
//   #evenements (ces "#..." correspondent aux id="..." des autres sections)
// ============================================================

import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Photo de fond en plein écran */}
      <img
        src="/images/hero.png"
        alt="Peinture abstraite aux tons de vert céladon et crème"
        className="absolute inset-0 size-full object-cover"
      />
      {/* Voile dégradé pour que le texte reste lisible sur la photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="max-w-2xl">
          {/* Petit texte en majuscules au-dessus du titre */}
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-primary">
            Association artisitque — Hermance
          </p>
          {/* Titre principal du site */}
          <h1 className="font-serif text-4xl leading-[1.1] text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Association des Artistes d&apos;Hermance
          </h1>
          {/* Paragraphe de présentation */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/70">
            À Hermance, l'art trouve sa place. Notre association réunit les talents de la région et 
            accueille tous ceux qui désirent exprimer leur créativité lors de nos expositions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Bouton principal (rose plein) : mène vers la section artistes */}
            <a
              href="#artistes"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Découvrir les Artistes
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            {/* Lien secondaire (texte souligné) : mène vers la section événements */}
            <a
              href="#evenements"
              className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Nos Événements / Expositions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
