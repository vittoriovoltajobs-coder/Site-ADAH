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
    bio: [
      "Installée à Hermance depuis plus de vingt ans, Marie Dupont consacre sa peinture aux paysages du bord du lac. Formée aux Beaux-Arts de Genève, elle travaille l'huile en couches successives pour restituer la vibration de la lumière.",
      "Ses toiles, exposées régulièrement en Suisse romande, invitent à la contemplation d'une nature à la fois familière et réinventée.",
    ],
    email: '',
    instagram: '#',
    works: [
      { src: '/images/anita1.JPG', title: '' },
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
    bio: [
      "Sculpteur autodidacte, Jean Martin travaille la pierre calcaire et le bois flotté ramassé sur les rives du lac. Son geste cherche l'équilibre entre la force de la matière et la douceur des courbes.",
      "Ses œuvres monumentales ont été présentées dans plusieurs jardins de sculptures de la région lémanique.",
    ],
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
    bio: [
      "Claire Favre voue une passion à l'aquarelle depuis l'enfance. Elle explore les fleurs sauvages, les feuillages et les reflets de l'eau dans des compositions tout en transparence.",
      "Elle anime également des stages d'initiation à l'aquarelle au sein de l'association.",
    ],
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
    bio: [
      "Pierre Rochat parcourt les rives du lac depuis quarante ans, à la recherche de la lumière rare. Ses tirages, en grand format, jouent sur les nuances de gris et de vert d'une nature apaisée.",
      "Son travail a fait l'objet de plusieurs publications et expositions personnelles.",
    ],
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
    bio: [
      "Sophie Brunner tourne et modèle le grès dans son atelier d'Hermance. Ses émaux, développés à partir de cendres végétales, déclinent une palette de verts profonds et de crèmes mats.",
      "Chaque pièce, unique, célèbre le geste artisanal et la beauté du quotidien.",
    ],
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
    bio: [
      "Jeune peintre de la relève, Luc Moret travaille l'acrylique dans de grands formats abstraits. Son vocabulaire pictural s'inspire des textures de la nature et de la matière.",
      "Il représente la nouvelle génération d'artistes de l'association.",
    ],
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
    bio: [
      "Jeune peintre de la relève, Luc Moret travaille l'acrylique dans de grands formats abstraits. Son vocabulaire pictural s'inspire des textures de la nature et de la matière.",
      "Il représente la nouvelle génération d'artistes de l'association.",
    ],
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
    bio: [
      "Jeune peintre de la relève, Luc Moret travaille l'acrylique dans de grands formats abstraits. Son vocabulaire pictural s'inspire des textures de la nature et de la matière.",
      "Il représente la nouvelle génération d'artistes de l'association.",
    ],
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
    bio: [
      "Jeune peintre de la relève, Luc Moret travaille l'acrylique dans de grands formats abstraits. Son vocabulaire pictural s'inspire des textures de la nature et de la matière.",
      "Il représente la nouvelle génération d'artistes de l'association.",
    ],
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
    bio: [
      "Jeune peintre de la relève, Luc Moret travaille l'acrylique dans de grands formats abstraits. Son vocabulaire pictural s'inspire des textures de la nature et de la matière.",
      "Il représente la nouvelle génération d'artistes de l'association.",
    ],
    email: '',
    works: [
      { src: '/images/tina1.jpg', title: '' },
      { src: '/images/tina2.jpg', title: '' },
      { src: '/images/tina3.jpg', title: '' },
    ],
    exhibitions: ['Expo Édition 2026'],
  },
]
