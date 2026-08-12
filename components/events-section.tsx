// ============================================================
// SECTION "EXPOSITIONS & ÉVÉNEMENTS"
// La liste des événements est le tableau "events" juste en dessous.
// Chaque événement est un bloc { ... } avec :
//   - src         → photo de l'événement (dans public/images/)
//   - tag         → petite étiquette affichée sur la photo
//   - title       → titre de l'événement
//   - date        → date (texte libre, écris-la comme tu veux)
//   - place       → lieu
//   - description → texte affiché sous la date/le lieu
//
// POUR AJOUTER UN ÉVÉNEMENT : copie un bloc { ... } entier,
// colle-le avant ou après un autre (avec une virgule entre les deux),
// et change les informations à l'intérieur.
// POUR SUPPRIMER UN ÉVÉNEMENT : supprime son bloc { ... } en entier.
// (NOTE : l'événement "Ateliers ouverts du village" ci-dessous est
// un événement du village, pas la section "Ateliers" qui a été
// retirée du site, il reste donc affiché normalement.)
// ============================================================

import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'

type EventItem = {
  src: string
  tag: string
  title: string
  date: string
  place: string
  description: string
}

const events: EventItem[] = [
  {
    src: '/images/expo26.png',
    tag: 'Exposition',
    title: "Exposition - Edition 2026",
    date: '21 & 22 septembre 2025',
    place: "Salle communale d'Hermance",
    description:
      "Retrouvez-nous pour une nouvelle édition au cœur d'Hermance ! Venez découvrir la richesse et la diversité des créations de nos artistes locaux dans une ambiance conviviale.",
  },
  {
    src: '/images/event-2025.png',
    tag: 'Exposition',
    title: "Exposition - Edition 2025",
    date: '21 & 22 septembre 2025',
    place: "Salle communale d'Hermance",
    description:
      "L'édition 2025 a célébré la créativité locale à travers une belle sélection d'œuvres uniques présentées à Hermance.",
  },
  {
    src: '/images/event-tour.jpg',
    tag: 'Exposition',
    title: "Exposition - Maison de la Tour",
    date: '15 décembre au 15 mars 2025',
    place: 'Maison de la Tour',
    description:
      "L'exposition qui s'est tenue à la Maison de la Tour a mis en lumière le talent de cinq artistes d'Hermance. Du 15 décembre au 15 mars 2025, les résidents et visiteurs ont eu l'occasion de découvrir la richesse artistique de notre association à travers leurs œuvres présentées dans les salles communes.",
  },
  {
    src: '/images/event-2024.png',
    tag: 'Exposition',
    title: 'Exposition - Edition 2024',
    date: '21 & 22 septembre 2024',
    place: "Salle communale d'Hermance",
    description:
      "Immersion au cœur de la création : une exposition qui a ouvert les portes des ateliers du village pour célébrer le savoir-faire de nos artistes.",
  },
]

export function EventsSection() {
  return (
    <section id="evenements" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Petit texte au-dessus du titre */}
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-primary">
            Agenda de l&apos;association
          </p>
          {/* Titre de la section */}
          <h2 className="font-serif text-3xl text-balance text-foreground md:text-5xl">
            Expositions &amp; Événements
          </h2>
          {/* Paragraphe d'introduction */}
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Vernissages, marchés d&apos;art et portes ouvertes&nbsp;: retrouvez le
            collectif tout au long de l&apos;année à Hermance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="group flex flex-col overflow-hidden rounded-sm border border-border/60 bg-card shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.src || '/placeholder.svg'}
                  alt={event.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground">
                  {event.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl text-foreground">
                  {event.title}
                </h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Calendar className="size-4 shrink-0 text-primary" />
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0 text-primary" />
                    {event.place}
                  </p>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
                <a
                  href="#contact"
                  className="group/link mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-primary"
                >
                  En savoir plus
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
