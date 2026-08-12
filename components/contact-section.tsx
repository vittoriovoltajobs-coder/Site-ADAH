// ============================================================
// SECTION "CONTACT & DEVENIR MEMBRE" (coordonnées + formulaire)
// - Les coordonnées (email, téléphone, adresse) : tableau "contactInfo"
//   juste en dessous
// - Les liens Instagram/Facebook : cherche href="#" plus bas, remplace
//   le "#" par le vrai lien de la page
// - La carte : l'adresse actuelle est codée dans le lien "src" de la
//   carte (iframe), à changer si l'adresse de l'association change
// - Le formulaire (prénom, nom, email, motif, sujet, message) : à ce
//   stade il affiche juste "Merci pour votre message" sans réellement
//   envoyer d'email nulle part, il faudra brancher un vrai service
//   d'envoi (ex: Formspree, Resend) pour que les messages t'arrivent.
// ============================================================

'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

// Coordonnées affichées à gauche du formulaire. Modifie les valeurs
// "value" (ce qui s'affiche) et "href" (le lien cliquable, mailto:/tel:)
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'soucky@bluewin.ch', href: 'mailto:soucky@bluewin.ch' },
  { icon: Phone, label: 'Téléphone', value: '+41 78 682 09 52', href: 'tel:+41786820952' },
  { icon: MapPin, label: 'Siège', value: "Rue du Lac, 1248 Hermance, Suisse", href: undefined },
]

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-primary">
            Restons en lien
          </p>
          <h2 className="font-serif text-3xl text-balance text-foreground md:text-5xl">
            Contact &amp; Devenir Membre
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Une question, une envie de participer à une exposition ou de rejoindre l'association
            en tant qu&apos;artiste&nbsp;? Écrivez-nous, nous serons
            ravis de vous répondre.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-between gap-10">
            <ul className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-foreground">
                        {item.value}
                      </span>
                    </span>
                  </>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 transition-opacity hover:opacity-70"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
                
              </p>
              {/* Remplace les deux "#" ci-dessous par les vraies adresses
                  Instagram et Facebook de l'association */}
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <InstagramIcon className="size-5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <FacebookIcon className="size-5" />
                </a>
              </div>
              {/* Carte OpenStreetMap centrée sur Hermance : si l'adresse
                  change, il faut régénérer ce lien sur openstreetmap.org
                  (bouton "Partager" → "Intégrer la carte HTML") */}
              <div className="mt-8 overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Carte d'Hermance"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=6.235%2C46.298%2C6.255%2C46.308&layer=mapnik&marker=46.303%2C6.245"
                  className="h-56 w-full grayscale-[30%]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="rounded-sm bg-card p-8 shadow-sm md:p-10">
            {sent ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Send className="size-6" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-foreground">
                  Merci pour votre message&nbsp;!
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="prenom" label="Prénom" placeholder="Votre prénom" />
                  <Field id="nom" label="Nom" placeholder="Votre nom" />
                </div>
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Votre email"
                />
                <div>
                  <label
                    htmlFor="motif"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Motif de votre demande
                  </label>
                  {/* Liste déroulante des motifs de contact : ajoute,
                      modifie ou supprime des <option> selon tes besoins */}
                  <select
                    id="motif"
                    name="motif"
                    defaultValue="Contact général"
                    className="w-full rounded-sm border border-input bg-secondary/40 px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                  >
                    <option>Contact général</option>
                    <option>Devenir membre</option>
                    <option>Renseignement</option>
                  </select>
                </div>
                <Field id="sujet" label="Sujet" placeholder="Objet de votre message" />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Votre message..."
                    className="w-full rounded-sm border border-input bg-secondary/40 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Envoyer le message
                  <Send className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = 'text',
  placeholder,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-sm border border-input bg-secondary/40 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
