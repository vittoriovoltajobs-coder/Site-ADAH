// ============================================================
// SECTION "NOS ARTISTES" (grille de fiches + fenêtre "profil" au clic)
// ATTENTION : ce fichier gère juste l'AFFICHAGE. Le contenu de
// chaque artiste (nom, photo, bio, discipline, œuvres...) se
// modifie dans un autre fichier : lib/artists.ts
// Ici tu peux modifier : le titre/texte d'intro de la section,
// et l'apparence des fiches/de la fenêtre de profil.
// ============================================================

'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, X, Mail, Award } from 'lucide-react'
import {
  artists,
  disciplines,
  type Artist,
  type Discipline,
} from '@/lib/artists'

export function ArtistsSection() {
  const [active, setActive] = useState<'Tous' | Discipline>('Tous')
  const [selected, setSelected] = useState<Artist | null>(null)

  const visible =
    active === 'Tous'
      ? artists
      : artists.filter((a) => a.discipline === active)

  return (
    <section id="artistes" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Petit texte au-dessus du titre */}
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-primary">
            Les membres de l'association
          </p>
          {/* Titre de la section */}
          <h2 className="font-serif text-3xl text-balance text-foreground md:text-5xl">
            Nos Artistes
          </h2>
          {/* Paragraphe d'introduction */}
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            De la peinture au vitrail, en passant par la sculpture, la céramique, le collage, la photographie, le tissage et la création artisanale : 
            découvrez les artistes qui font vivre l'Association des Artistes d'Hermance.
          </p>
        </div>

        {/* Boutons de filtre (Tous / Peinture / Sculpture...) — la liste des
            disciplines vient automatiquement de lib/artists.ts, tu n'as pas
            besoin de les modifier ici. */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {disciplines.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setActive(d)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === d
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
              aria-pressed={active === d}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Grille des fiches artistes (photo + nom + court texte).
            Le contenu de chaque fiche vient de lib/artists.ts,
            un clic sur "Voir le profil" ouvre la fenêtre détaillée
            gérée par la fonction ArtistModal ci-dessous. */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((artist) => (
            <article
              key={artist.id}
              className="group flex flex-col overflow-hidden rounded-sm border border-border/60 bg-card shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={artist.portrait || '/placeholder.svg'}
                  alt={`Portrait de ${artist.name}, ${artist.medium}`}
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                  {artist.medium}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-foreground">
                  {artist.name}
                </h3>
                {artist.preview && (
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {artist.preview}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setSelected(artist)}
                  className="group/link mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-primary"
                >
                  Voir le profil
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <ArtistModal artist={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

// ------------------------------------------------------------
// FENÊTRE "PROFIL DÉTAILLÉ" qui s'ouvre au clic sur une fiche
// (photo + bio complète + email + galerie d'œuvres). Le contenu
// affiché vient toujours de lib/artists.ts, ici on gère juste
// la mise en page de cette fenêtre.
// ------------------------------------------------------------
function ArtistModal({
  artist,
  onClose,
}: {
  artist: Artist
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-foreground/80 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Profil de ${artist.name}`}
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-4xl overflow-hidden rounded-sm bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background"
          aria-label="Fermer"
        >
          <X className="size-5" />
        </button>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] md:max-h-[560px]">
          <div className="relative">
            <img
              src={artist.portrait || '/placeholder.svg'}
              alt={`Portrait de ${artist.name}`}
              className="h-64 w-full object-cover md:h-full"
            />
          </div>

          <div className="overflow-y-auto p-8 md:p-10">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              {artist.medium}
            </span>
            <h3 className="mt-2 font-serif text-3xl text-foreground">
              {artist.name}
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {artist.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href={`mailto:${artist.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              {artist.email}
            </a>
            {artist.exhibitions && artist.exhibitions.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                 {artist.exhibitions.map((expo) => (
                   <span
                      key={expo}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                       <Award className="size-3" />
                       {expo}
                      </span>
                     ))}
                  </div>
                )}
          </div>
        </div>
         {artist.works.length > 0 && (
          <div className="border-t border-border p-8 md:p-10">
            <h4 className="mb-6 font-serif text-xl text-foreground">
              Galerie de l&apos;artiste
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {artist.works.map((work) => (
                <figure
                  key={work.title}
                  className="overflow-hidden rounded-sm border border-border/60"
                >
                  <img
                    src={work.src || '/placeholder.svg'}
                    alt={work.title}
                    className="aspect-square w-full object-cover"
                  />
                  <figcaption className="bg-secondary/40 px-3 py-2 text-center text-xs text-muted-foreground">
                    {work.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}