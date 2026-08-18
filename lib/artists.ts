// ============================================================
// LISTE DES ARTISTES DE L'ASSOCIATION
// C'est ICI que tu ajoutes, modifies ou supprimes un artiste.
// Chaque artiste est un bloc { ... } dans le tableau "artists"
// plus bas. Pour chaque artiste :
//   - name       → nom affiché
//   - medium     → sa spécialité (affichée sous forme de petite étiquette)
//   - discipline → doit être exactement l'une de : Peinture, Sculpture,
//                  Céramique, Photographie (sert au filtre)
//   - portrait   → chemin de sa photo de profil (dans public/images/)
//   - preview    → court texte affiché sur la fiche (avant d'ouvrir le profil)
//   - bio        → texte(s) affiché(s) dans la fenêtre "profil détaillé"
//                  (un texte par ligne entre guillemets, séparés par une virgule)
//   - email      → email affiché et utilisé pour le lien "mailto"
//   - works      → les photos d'œuvres montrées dans la galerie du profil
//
// POUR AJOUTER UN NOUVEL ARTISTE : copie un bloc { ... } existant
// en entier (des accolades { à }), colle-le juste avant ou après,
// et change les informations à l'intérieur. N'oublie pas la virgule
// entre deux artistes.
//
// POUR SUPPRIMER UN ARTISTE : supprime tout son bloc { ... } (avec
// la virgule qui le sépare des autres).
// ============================================================

export type Discipline =
  | 'Peinture'
  | 'Sculpture'
  | 'Céramique'
  | 'Collage'
  | 'Vitraille'
  | 'Photographie'
  | 'Tissage'
  | 'Création'
 

export type Work = {
  src: string
  title: string
}

export type Artist = {
  id: string
  name: string
  medium: string
  discipline: Discipline
  portrait: string
  preview: string
  bio: string[]
  email: string
  instagram?: string
  works: Work[]
  exhibitions?: string[]
}

export const disciplines: Array<'Tous' | Discipline> = [  
  'Tous',
  'Peinture',
  'Sculpture',
  'Céramique',
  'Collage',
  'Vitraille',
  'Photographie',
  'Tissage',
  'Création',
]

export const artists: Artist[] = [
  {
    id: 'anita-kironde',
    name: 'Anita Kironde',
    medium: "Collage Naturelle",
    discipline: 'Collage',
    portrait: '/images/artist-1.JPG',
    preview:
      "Anita observe le monde lors de ses balades et récolte les plantes qui composeront ses collages végétaux, séchées avec soin puis assemblées en maisons esquissées au crayon.",
    bio: ["Anita observe le monde lors de ses balades et récolte les plantes qui composeront ses collages végétaux, séchées avec soin puis assemblées en maisons esquissées au crayon."],
    email: '',
    instagram: '#',
    works: [
      { src: '/images/anita4.jpeg', title: '' },
      { src: '/images/anita2.jpeg', title: '' },
      { src: '/images/anita3.jpeg', title: '' },
    ],
  },
  {
    id: 'evelyne-camoglu',
    name: 'Evelyne Camoglu',
    medium: 'Peintre',
    discipline: 'Peinture',
    portrait: '/images/artist-2.jpg',
    preview:
      "Evelyne traduit la ferveur de ses voyages en Inde à travers des peintures à l'huile et aquarelles, réalisées d'après ses propres photographies.",
    bio: ["Evelyne traduit la ferveur de ses voyages en Inde à travers des peintures à l'huile et aquarelles, réalisées d'après ses propres photographies."],
    email: '',
    works: [
      { src: '/images/evelyne1.jpg', title: '' },
      { src: '/images/evelyne2.jpg', title: '' },
      { src: '/images/evelyne3.jpg', title: '' },
      { src: '/images/evelyne4.jpg', title: '' },
      { src: '/images/evelyne5.jpg', title: '' },
      { src: '/images/evelyne6.jpg', title: '' },
    ],
  },
  {
    id: 'fabienne-piguet',
    name: 'Fabienne Piguet',
    medium: 'Peintre',
    discipline: 'Peinture',
    portrait: '/images/artist-3.jpg',
    preview:
      "Artiste autodidacte, elle explore l'abstraction à la peinture acrylique, guidant ses toiles par l'expérimentation instinctive des couleurs et des matières.",
    bio: ["Artiste autodidacte, elle explore l'abstraction à la peinture acrylique, guidant ses toiles par l'expérimentation instinctive des couleurs et des matières."],
    email: '',
    instagram: '#',
    works: [
      { src: '/images/Fabienne1.jpg', title: '' },
      { src: '/images/Fabienne2.jpg', title: '' },
      { src: '/images/Fabienne3.jpg', title: "" },
      { src: '/images/Fabienne4.jpg', title: "" },
      { src: '/images/Fabienne5.png', title: "" },
    ],
  },
  {
    id: 'hélène-kowalski',
    name: 'Hélène Kowalski',
    medium: "Vitraille",
    discipline: 'Vitraille',
    portrait: '/images/artist-4.jpg',
    preview:
      "Passionnée d'Art déco, elle façonne le verre en jouant avec ses textures, ses jeux d'ombre et de lumière, et ses infinies déclinaisons de transparences colorées.",
    bio: ["Passionnée d'Art déco, elle façonne le verre en jouant avec ses textures, ses jeux d'ombre et de lumière, et ses infinies déclinaisons de transparences colorées."],
    email: '',
    works: [
        ],
  },
  {
    id: 'isaline-segabrugo',
    name: 'Isaline Segabrugo',
    medium: 'Tisseuse',
    discipline: 'Tissage',
    portrait: '/images/artist-5.jpg',
    preview:
      "Isaline tisse le coton et le lin sur son métier pour créer des objets usuels au design abstrait, guidée par une démarche méditative et colorée",
    bio: ["Isaline tisse le coton et le lin sur son métier pour créer des objets usuels au design abstrait, guidée par une démarche méditative et colorée"],
    email: '' ,
    instagram: '#',
    works: [
      { src: '/images/Isaline1.png', title: '' },
    ],
  },
  {
    id: 'maya-west',
    name: 'Maya West',
    medium: 'Peintre',
    discipline: 'Peinture',
    portrait: '/images/artist-6.jpg',
    preview:
      "Maya manie l'aquarelle entre portraits aux couleurs vibrantes d'inspiration fauviste et paysages fidèles aux nuances de la nature.",
    bio: ["Maya manie l'aquarelle entre portraits aux couleurs vibrantes d'inspiration fauviste et paysages fidèles aux nuances de la nature."],
    email: '',
    works: [
      { src: '/images/maya1.jpg', title: '' },
      { src: '/images/maya2.jpg', title: '' },
      { src: '/images/maya3.jpg', title: '' },
      { src: '/images/maya4.jpg', title: '' },
      { src: '/images/maya5.jpg', title: '' },
      { src: '/images/maya6.jpg', title: '' },
      { src: '/images/maya7.jpg', title: '' },
      { src: '/images/maya8.jpg', title: '' },
    ],
  },
  {
    id: 'miky-barbey',
    name: 'Miky Barbey',
    medium: 'Peintre',
    discipline: 'Peinture',
    portrait: '/images/artist-7a.jpg',
    preview:
      "De retour à la peinture après une longue pause, elle ravive sa pratique artistique à travers des toiles spontanées, guidée par le plaisir du partage et de la création.",
    bio: ["De retour à la peinture après une longue pause, elle ravive sa pratique artistique à travers des toiles spontanées, guidée par le plaisir du partage et de la création."],
    email: '',
    works: [
      { src: '/images/miky1.jpg', title: '' },
      { src: '/images/miky2.jpg', title: '' },
    ],
  },
  {
    id: 'nathalie-masset',
    name: 'Nathalie Masset',
    medium: 'Sculptrice',
    discipline: 'Sculpture',
    portrait: '/images/artist-8.jpg',
    preview:
      "Nathalie Masset façonne le métal par soudure et rivetage pour créer des sculptures inspirées de la mythologie et des arts primitifs, enrichies de matériaux de récupération.",
    bio: ["Nathalie Masset façonne le métal par soudure et rivetage pour créer des sculptures inspirées de la mythologie et des arts primitifs, enrichies de matériaux de récupération."],
    email: '',
    works: [
      { src: '/images/nathalie1.jpg', title: '' },
    ],
  },
  {
    id: 'sylvain-leber',
    name: 'Sylvain Leber',
    medium: 'Peintre',
    discipline: 'Peinture',
    portrait: '/images/artist-9.jpg',
    preview:
      "Artiste autodidacte, elle façonne des compositions abstraites à l'acrylique en se laissant guider par l'instinct et l'expérimentation des couleurs.",
    bio: ["Artiste autodidacte, elle façonne des compositions abstraites à l'acrylique en se laissant guider par l'instinct et l'expérimentation des couleurs."],
    email: '',
    works: [],
  },
    {
    id: 'tina-höhn-jolivet',
    name: 'Tina Höhn Jolivet',
    medium: 'Création de lampes',
    discipline: 'Création',
    portrait: '/images/artist-10.jpg',
    preview:
      "Artiste autodidacte, elle façonne des compositions abstraites à l'acrylique en se laissant guider par l'instinct et l'expérimentation des couleurs.",
    bio: ["Artiste autodidacte, elle façonne des compositions abstraites à l'acrylique en se laissant guider par l'instinct et l'expérimentation des couleurs."],
    email: '',
    works: [
      { src: '/images/tina1.jpg', title: '' },
      { src: '/images/tina2.jpg', title: '' },
      { src: '/images/tina3.jpg', title: '' },
    ],
    exhibitions: ['Expo Édition 2026'],
  },
    {
    id: 'adriana-hermann',
    name: 'Adriana Hermann',
    medium: 'Création de sac',
    discipline: 'Création',
    portrait: '/images/adriana2.jpg',
    preview:"Genevoise d'origine, Adriana tisse son histoire à travers le crochet depuis son plus jeune âge. Avec une infinie délicatesse, elle transforme les matières pour créer des pièces uniques : vêtements stylés, sacs élégants, nappes raffinées et mandalas vibrants.",
    bio: ["Genevoise d'origine, Adriana tisse son histoire à travers le crochet depuis son plus jeune âge. Avec une infinie délicatesse, elle transforme les matières pour créer des pièces uniques : vêtements stylés, sacs élégants, nappes raffinées et mandalas vibrants."],
    email: '',
    works: [
      { src: '/images/adriana1.jpg', title: '' },
      { src: '/images/adriana3.PNG', title: '' },
      { src: '/images/adriana4.jpg', title: '' },
    ],
    exhibitions: ['Expo Édition 2026'],
  },
    {
    id: 'diana-hayek-barriviera',
    name: 'Diana Hayek Barriviera',
    medium: 'Peintre',
    discipline: 'Peinture',
    portrait: '/images/adriana2.jpg',
    preview:"Artiste passionnée par les couleurs, Diana s’initie à plusieurs techniques et supports. Elle affectionne en particulier l’aquarelle et toutes les encres. Elle s’inspire de ce qui l’entoure, des photos qu’elle prend durant ses voyages et des paysages qui la touchent.",
    bio: ["Artiste passionnée par les couleurs, Diana s’initie à plusieurs techniques et supports. Elle affectionne en particulier l’aquarelle et toutes les encres. Elle s’inspire de ce qui l’entoure, des photos qu’elle prend durant ses voyages et des paysages qui la touchent."],
    email: '',
    works: [
      { src: '/images/adriana1.jpg', title: '' },
      { src: '/images/adriana3.PNG', title: '' },
      { src: '/images/adriana4.jpg', title: '' },
    ],
    exhibitions: ['Expo Édition 2026'],
  },
  
]
