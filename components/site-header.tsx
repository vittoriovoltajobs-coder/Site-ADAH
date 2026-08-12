// ============================================================
// MENU DE NAVIGATION (en haut de toutes les pages)
// La liste des liens du menu est ici (navItems). Chaque lien
// pointe vers une section grâce à son "#..." qui doit correspondre
// à l'id="..." défini dans le composant de cette section
// (ex: #artistes → id="artistes" dans artists-section.tsx).
// POUR AJOUTER/RETIRER UN LIEN DE MENU : ajoute ou supprime une
// ligne { label: '...', href: '#...' } ci-dessous. Le même menu
// s'affiche automatiquement en version mobile (avec le bouton ☰).
// ============================================================

'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Le Collectif', href: '#collectif' },
  { label: 'Nos Artistes', href: '#artistes' },
  { label: 'Expositions & News', href: '#evenements' },
  { label: 'Contact / Devenir Membre', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a
          href="#accueil"
          className="flex flex-col leading-none"
          aria-label="ADAH, Association des Artistes d'Hermance, accueil"
        >
          {/* Nom affiché en haut à gauche (logo texte). Si tu préfères
              afficher ton vrai logo image, remplace ces deux <span>
              par une balise <img src="/images/logo.png" ... /> */}
          <span className="font-serif text-lg tracking-[0.15em] text-foreground md:text-xl">
            ADAH
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
            Artistes d&apos;Hermance
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-sm p-2 text-foreground lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
