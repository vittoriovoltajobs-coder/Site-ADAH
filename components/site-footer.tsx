// ============================================================
// PIED DE PAGE (bas de toutes les pages)
// Mêmes liens de menu que le header, mais en version plus courte.
// POUR AJOUTER/RETIRER UN LIEN : ajoute ou supprime une ligne
// { label: '...', href: '#...' } ci-dessous.
// Le texte de copyright en bas de page se modifie plus bas,
// il se met à jour automatiquement chaque année.
// ============================================================

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Le Collectif', href: '#collectif' },
  { label: 'Nos Artistes', href: '#artistes' },
  { label: 'Expositions', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <a href="#accueil" className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.15em] text-foreground">
              ADAH
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
              Artistes d&apos;Hermance
            </span>
          </a>

          <nav aria-label="Navigation pied de page">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Texte de copyright : {new Date().getFullYear()} affiche
            automatiquement l'année en cours, ne le remplace pas par
            un chiffre écrit à la main */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} ADAH — Association des Artistes
            d&apos;Hermance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
