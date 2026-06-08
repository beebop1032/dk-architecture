export interface Photo { src: string; alt: string }
export interface Project { slug: string; title: string; tag: string; cover: Photo; photos: Photo[] }

export const projects: Project[] = [
  {
    slug: 'realisation-bw',
    title: 'Réalisation Brabant wallon',
    tag: 'Construction neuve',
    cover: { src: '/photos/realisation-bw/extension-pierre-bardage-bois-brabant-wallon-01.jpg', alt: 'Extension contemporaine en pierre et bardage bois, Brabant wallon' },
    photos: [
      { src: '/photos/realisation-bw/extension-pierre-bardage-bois-brabant-wallon-01.jpg', alt: 'Extension contemporaine en pierre et bardage bois, Brabant wallon' },
      { src: '/photos/realisation-bw/maison-contemporaine-bardage-bois-terrasse-brabant-wallon.jpg', alt: 'Maison contemporaine avec bardage bois et terrasse, Brabant wallon' },
      { src: '/photos/realisation-bw/extension-bois-soubassement-pierre-brabant-wallon.jpg', alt: 'Extension bois et soubassement en pierre, réalisation DK architecture' },
    ],
  },
  {
    slug: 'avant-apres',
    title: 'Avant / Après rénovation',
    tag: 'Rénovation',
    cover: { src: '/photos/avant-apres/renovation-surelevation-lucarne-bois-01.jpg', alt: 'Rénovation et surélévation avec lucarne bois, Brabant wallon' },
    photos: [
      { src: '/photos/avant-apres/renovation-surelevation-lucarne-bois-01.jpg', alt: 'Rénovation et surélévation avec lucarne bois, Brabant wallon' },
      { src: '/photos/avant-apres/renovation-maison-brabant-wallon-avant.jpg', alt: 'Maison avant rénovation par DK architecture' },
      { src: '/photos/avant-apres/renovation-maison-brabant-wallon-apres.jpg', alt: 'Maison après rénovation par DK architecture, Brabant wallon' },
    ],
  },
  {
    slug: 'elegant-bw',
    title: 'Extension bois élégante',
    tag: 'Extension',
    cover: { src: '/photos/elegant-bw/extension-bardage-bois-vertical-maison-briques-01.jpg', alt: 'Extension en bardage bois vertical sur maison en briques, Brabant wallon' },
    photos: [
      { src: '/photos/elegant-bw/extension-bardage-bois-vertical-maison-briques-01.jpg', alt: 'Extension en bardage bois vertical sur maison en briques, Brabant wallon' },
      { src: '/photos/elegant-bw/extension-bois-detail-bardage-02.jpg', alt: 'Détail bardage bois extension, DK architecture' },
      { src: '/photos/elegant-bw/extension-bois-jardin-03.jpg', alt: "Vue de l'extension bois depuis le jardin, Brabant wallon" },
      { src: '/photos/elegant-bw/extension-bois-ensemble-04.jpg', alt: "Extension bois vue d'ensemble, DK architecture Chastre" },
    ],
  },
  {
    slug: 'cabane-bomal',
    title: 'Cabane en bois — Bomal',
    tag: 'Construction bois',
    cover: { src: '/photos/cabane-bomal/cabane-bois-terrasse-bomal-ardennes-01.jpg', alt: 'Cabane en bois avec terrasse à Bomal, Ardennes' },
    photos: [
      { src: '/photos/cabane-bomal/cabane-bois-terrasse-bomal-ardennes-01.jpg', alt: 'Cabane en bois avec terrasse à Bomal, Ardennes' },
      { src: '/photos/cabane-bomal/cabane-bois-bomal-facade-02.jpg', alt: 'Cabane bois Bomal, façade principale' },
      { src: '/photos/cabane-bomal/cabane-bois-bomal-lateral-03.jpg', alt: 'Cabane bois Bomal, vue latérale' },
      { src: '/photos/cabane-bomal/cabane-bois-bomal-terrasse-04.jpg', alt: 'Cabane bois Bomal, terrasse extérieure' },
      { src: '/photos/cabane-bomal/cabane-bois-bomal-detail-05.jpg', alt: 'Cabane bois Bomal, détail de construction' },
    ],
  },
  {
    slug: 'paille-tech',
    title: 'Construction paille biosourcée',
    tag: 'Biosourcé',
    cover: { src: '/photos/paille-tech/construction-paille-ossature-bois-biosource-01.jpg', alt: 'Chantier construction paille et ossature bois biosourcée' },
    photos: [
      { src: '/photos/paille-tech/construction-paille-ossature-bois-biosource-01.jpg', alt: 'Chantier construction paille et ossature bois biosourcée' },
      { src: '/photos/paille-tech/construction-paille-ossature-bois-structure-02.jpg', alt: 'Ossature bois, vue de structure, construction biosourcée' },
      { src: '/photos/paille-tech/construction-paille-bottes-mise-en-place-03.jpg', alt: 'Mise en place des bottes de paille, isolation biosourcée' },
      { src: '/photos/paille-tech/construction-paille-chantier-ensemble-04.jpg', alt: "Chantier construction paille biosourcée, vue d'ensemble" },
      { src: '/photos/paille-tech/construction-paille-detail-05.jpg', alt: 'Détail ossature paille, DK architecture' },
      { src: '/photos/paille-tech/construction-paille-avancement-06.jpg', alt: 'Avancement du chantier construction paille biosourcée' },
      { src: '/photos/paille-tech/construction-paille-finitions-exterieures-07.jpg', alt: 'Construction paille, finitions extérieures' },
    ],
  },
  {
    slug: 'permis-soignies',
    title: 'Permis — Soignies',
    tag: "Permis d'urbanisme",
    cover: { src: '/photos/permis-urbanisme-soignies/permis-urbanisme-maison-contemporaine-soignies-01.jpg', alt: "Permis d'urbanisme maison contemporaine à Soignies, rendu 3D" },
    photos: [
      { src: '/photos/permis-urbanisme-soignies/permis-urbanisme-maison-contemporaine-soignies-01.jpg', alt: "Permis d'urbanisme maison contemporaine à Soignies, rendu 3D" },
      { src: '/photos/permis-urbanisme-soignies/permis-urbanisme-soignies-plan-projet-02.jpg', alt: "Plan du projet permis d'urbanisme Soignies" },
      { src: '/photos/permis-urbanisme-soignies/permis-urbanisme-soignies-vue-exterieure-03.jpg', alt: "Vue extérieure projet permis d'urbanisme Soignies" },
      { src: '/photos/permis-urbanisme-soignies/permis-urbanisme-soignies-detail-04.jpg', alt: "Détail projet architecte Soignies, DK architecture" },
      { src: '/photos/permis-urbanisme-soignies/permis-urbanisme-soignies-facade-05.jpg', alt: "Vue façade maison Soignies, permis d'urbanisme" },
      { src: '/photos/permis-urbanisme-soignies/permis-urbanisme-soignies-vue-arriere-06.jpg', alt: "Vue arrière maison Soignies, DK architecture" },
    ],
  },
]
