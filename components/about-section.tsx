// ============================================================
// SECTION "LE COLLECTIF" (présentation de l'association)
// - Photo de gauche : public/images/event-vernissage.png
// - Titre, texte de présentation (3 paragraphes) et les 3 chiffres
//   clés (membres / disciplines / année de création) sont modifiables
//   directement dans le texte ci-dessous
// ============================================================

export function AboutSection() {
  return (
    <section id="collectif" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-sm border border-primary/30 lg:block" />
            {/* Photo illustrant la section, change le src pour une autre image */}
            <img
              src="/images/quisommenous.jpg"
              alt="Vernissage du collectif des Artistes d'Hermance"
              className="relative w-full rounded-sm object-cover shadow-lg"
            />
          </div>

          <div>
            {/* Petit texte en majuscules au-dessus du titre */}
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-primary">
              Qui sommes-nous ?
            </p>
            {/* Titre de la section */}
            <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-5xl">
              Une association au service des artistes d&apos;Hermance
            </h2>
            {/* Les 3 paragraphes de présentation de l'association */}
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                L'association à pour vocation de soutenir les artistes d'Hermmance et de ses alentours, 
                en leur offrant l'opportunité de se faire connaître et de vendre leurs oeuvres à travers 
                des expositions organisées dans différents lieux de la région.
              </p>
              <p>
                Notre mission&nbsp;: faire rayonner la vie artistique de la
                région, favoriser les échanges entre créateurs et rendre
                l&apos;art accessible à tous grâce à des expositions, ou des
                évenements ouverts au public.
              </p>
              <p>
                Ensemble, nous cultivons un lieu de partage où chaque talent
                trouve sa place et où le public découvre la richesse créative
                d&apos;Hermance.
              </p>
            </div>

            {/* Les 3 chiffres clés affichés en bas de la section */}
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  Artistes membres
                </dt>
                <dd className="mt-1 font-serif text-2xl text-foreground">25+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  Disciplines
                </dt>
                <dd className="mt-1 font-serif text-2xl text-foreground">6+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  Depuis
                </dt>
                <dd className="mt-1 font-serif text-2xl text-foreground">2023</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
