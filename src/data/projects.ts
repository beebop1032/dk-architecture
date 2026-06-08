export interface Photo { src: string; alt: string }
export interface Project { slug: string; title: string; tag: string; cover: Photo; photos: Photo[] }

export const projects: Project[] = [
  {
    slug: 'realisation-bw',
    title: 'Réalisation Brabant wallon',
    tag: 'Construction neuve',
    cover: { src: '/photos/realisation-bw/480675020_1139028084581782_5424273550536307218_n.jpg', alt: 'Extension contemporaine en pierre et bardage bois' },
    photos: [
      { src: '/photos/realisation-bw/480675020_1139028084581782_5424273550536307218_n.jpg', alt: 'Extension contemporaine en pierre et bardage bois' },
      { src: '/photos/realisation-bw/480598400_1139028217915102_2980188089996647331_n.jpg', alt: 'Maison contemporaine avec bardage bois et terrasse' },
      { src: '/photos/realisation-bw/480812628_1139028191248438_2690905198993266196_n.jpg', alt: 'Maison avec extension bois et soubassement en pierre' },
    ],
  },
  {
    slug: 'avant-apres',
    title: 'Avant / Après rénovation',
    tag: 'Rénovation',
    cover: { src: '/photos/avant-apres/493314466_1186625476488709_3314898866376642430_n.jpg', alt: 'Rénovation et surélévation avec lucarne bois' },
    photos: [
      { src: '/photos/avant-apres/493314466_1186625476488709_3314898866376642430_n.jpg', alt: 'Rénovation et surélévation avec lucarne bois' },
      { src: '/photos/avant-apres/492357132_1186625326488724_6906365675762397297_n.jpg', alt: 'Vue avant rénovation' },
      { src: '/photos/avant-apres/492911355_1186626903155233_4665014861025627786_n.jpg', alt: 'Vue après rénovation' },
    ],
  },
  {
    slug: 'elegant-bw',
    title: 'Extension bois élégante',
    tag: 'Extension',
    cover: { src: '/photos/elegant-bw/480702352_1140353771115880_2908240527117036417_n.jpg', alt: 'Extension en bardage bois vertical sur maison en briques' },
    photos: [
      { src: '/photos/elegant-bw/480702352_1140353771115880_2908240527117036417_n.jpg', alt: 'Extension en bardage bois vertical sur maison en briques' },
      { src: '/photos/elegant-bw/480667014_1140353707782553_3445155967269113882_n.jpg', alt: 'Détail bardage bois extension' },
      { src: '/photos/elegant-bw/480731890_1140353767782547_4698332386512659350_n.jpg', alt: 'Vue de l\'extension bois depuis le jardin' },
      { src: '/photos/elegant-bw/481087460_1140353757782548_3619129340757560200_n.jpg', alt: 'Extension bois, vue d\'ensemble' },
    ],
  },
  {
    slug: 'cabane-bomal',
    title: 'Cabane en bois — Bomal',
    tag: 'Construction bois',
    cover: { src: '/photos/cabane-bomal/480705071_1138208167997107_6044571817886072853_n.jpg', alt: 'Cabane en bois avec terrasse à Bomal' },
    photos: [
      { src: '/photos/cabane-bomal/480705071_1138208167997107_6044571817886072853_n.jpg', alt: 'Cabane en bois avec terrasse à Bomal' },
      { src: '/photos/cabane-bomal/480291269_1138208574663733_947071450198985442_n.jpg', alt: 'Cabane bois Bomal, vue de face' },
      { src: '/photos/cabane-bomal/480486815_1138208541330403_7129268165496940931_n.jpg', alt: 'Cabane bois Bomal, vue latérale' },
      { src: '/photos/cabane-bomal/480640579_1138208147997109_5340117085289933858_n.jpg', alt: 'Cabane bois Bomal, terrasse' },
      { src: '/photos/cabane-bomal/480656818_1138208181330439_8928355941206387284_n.jpg', alt: 'Cabane bois Bomal, détail' },
    ],
  },
  {
    slug: 'paille-tech',
    title: 'Construction paille biosourcée',
    tag: 'Biosourcé',
    cover: { src: '/photos/Paille-Tech/552975097_1366809032114394_1525164031828917104_n.jpg', alt: 'Chantier construction paille et ossature bois' },
    photos: [
      { src: '/photos/Paille-Tech/552975097_1366809032114394_1525164031828917104_n.jpg', alt: 'Chantier construction paille et ossature bois' },
      { src: '/photos/Paille-Tech/552255543_1366809065447724_4376180222632095541_n.jpg', alt: 'Ossature bois, vue de structure' },
      { src: '/photos/Paille-Tech/552322650_1366809098781054_8926780127328193432_n.jpg', alt: 'Mise en place des bottes de paille' },
      { src: '/photos/Paille-Tech/552588968_1366808982114399_5510275234608199729_n.jpg', alt: 'Chantier paille, vue d\'ensemble' },
      { src: '/photos/Paille-Tech/553045475_1366808992114398_6853630504205994777_n.jpg', alt: 'Détail ossature paille' },
      { src: '/photos/Paille-Tech/553444990_1366809018781062_3197249732460370678_n.jpg', alt: 'Avancement du chantier paille' },
      { src: '/photos/Paille-Tech/553743476_1366809118781052_8724691311491304376_n.jpg', alt: 'Construction paille, finitions extérieures' },
    ],
  },
  {
    slug: 'permis-soignies',
    title: 'Permis — Soignies',
    tag: "Permis d'urbanisme",
    cover: { src: '/photos/permis-urbanistme-soignies/480850710_1140891247728799_8853314391375652934_n.jpg', alt: 'Rendu 3D maison contemporaine à Soignies' },
    photos: [
      { src: '/photos/permis-urbanistme-soignies/480850710_1140891247728799_8853314391375652934_n.jpg', alt: 'Rendu 3D maison contemporaine à Soignies' },
      { src: '/photos/permis-urbanistme-soignies/480497120_1140891004395490_8184201018699192776_n.jpg', alt: 'Plan du projet Soignies' },
      { src: '/photos/permis-urbanistme-soignies/480603276_1140891194395471_2183308084325881626_n.jpg', alt: 'Vue extérieure projet Soignies' },
      { src: '/photos/permis-urbanistme-soignies/480886677_1140891041062153_4950813206594938490_n.jpg', alt: 'Détail projet Soignies' },
      { src: '/photos/permis-urbanistme-soignies/481002589_1140891217728802_3374941478018256097_n.jpg', alt: 'Vue façade projet Soignies' },
      { src: '/photos/permis-urbanistme-soignies/481073141_1140891244395466_6927529758839010249_n.jpg', alt: 'Vue arrière projet Soignies' },
    ],
  },
]
