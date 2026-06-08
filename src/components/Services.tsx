const services = [
  {
    title: 'Construction neuve',
    desc: "Conception de maisons et bâtiments sur mesure, du concept au permis d'urbanisme jusqu'au suivi de chantier.",
    tag: 'Mission complète',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Rénovation & extension',
    desc: 'Rénovations, transformations et extensions qui valorisent votre bien — avec des matériaux sains et biosourcés.',
    tag: 'Cœur de métier',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M14 7l3 3M4 20l1-4L16 5l3 3L8 19l-4 1zM13 8l3 3" />
      </svg>
    ),
  },
  {
    title: 'Conseil & expertise',
    desc: 'Étude de faisabilité, avis technique, expertise immobilière et accompagnement de promoteurs.',
    tag: 'Sur mesure',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 3a9 9 0 109 9M12 3v9l6 3M12 3a9 9 0 018 5" />
      </svg>
    ),
  },
  {
    title: 'Permis & suivi de chantier',
    desc: "Constitution des dossiers de permis d'urbanisme et contrôle de l'exécution jusqu'à la réception des travaux.",
    tag: 'Tranquillité',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
]

import { MotionWrapper } from './MotionWrapper'

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <p className="eyebrow">Ce que nous faisons</p>
          <h2>Des missions complètes, du premier croquis aux clés</h2>
          <p className="mt-3.5 text-[1.05rem] text-ink-soft">De la conception au suivi de chantier, je prends en charge l&apos;ensemble de votre projet, avec une attention constante aux matériaux durables et au confort de vie.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <MotionWrapper key={s.title} delay={i * 0.08}>
              <div className="bg-white border border-line rounded p-7 hover:-translate-y-1 hover:shadow-lg transition">
                <div className="w-11 h-11 rounded bg-paper-2 flex items-center justify-center mb-4 text-accent-dark">
                  {s.icon}
                </div>
                <h3 className="mb-2.5">{s.title}</h3>
                <p className="text-[0.94rem] text-ink-soft">{s.desc}</p>
                <span className="inline-block mt-3.5 text-[0.72rem] font-bold uppercase tracking-widest text-accent-dark bg-paper-2 px-2.5 py-1 rounded-full">{s.tag}</span>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
