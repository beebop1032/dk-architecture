'use client'

import { useState } from 'react'
import { MotionWrapper } from './MotionWrapper'

const faqs = [
  {
    q: "Quand est-il obligatoire de faire appel à un architecte en Belgique ?",
    a: "En Belgique, le recours à un architecte inscrit à l'Ordre est obligatoire pour tout acte de bâtir soumis à permis d'urbanisme : construction neuve, transformation importante, extension, changement de destination. Pour les travaux simples comme une rénovation intérieure sans modification de structure porteuse, l'architecte n'est pas toujours légalement requis, mais son expertise reste un atout précieux pour la coordination et la maîtrise du budget.",
  },
  {
    q: "Combien coûtent les honoraires d'un architecte en Brabant wallon ?",
    a: "Les honoraires d'un architecte en Belgique varient selon la mission confiée et la complexité du projet. Ils représentent généralement entre 8 % et 12 % du coût total des travaux pour une mission complète (conception + permis + suivi de chantier). Pour une mission partielle — permis d'urbanisme uniquement ou suivi de chantier seul — la facturation est souvent forfaitaire. Le premier rendez-vous chez DK architecture est gratuit et sans engagement.",
  },
  {
    q: "Quel est le délai pour obtenir un permis d'urbanisme en Brabant wallon ?",
    a: "En Brabant wallon, le délai légal d'instruction d'un permis d'urbanisme est de 60 jours pour les dossiers simples (urbanisme ordinaire) et de 115 jours pour les dossiers complexes soumis à enquête publique. Ce délai court à compter du dépôt du dossier complet. Un dossier bien préparé et conforme aux règles urbanistiques locales évite les demandes de pièces complémentaires, qui suspendent ce délai.",
  },
  {
    q: "DK architecture travaille-t-il uniquement à Chastre et Gembloux ?",
    a: "Non — le bureau DK architecture est basé à Chastre (Villeroux-Blanmont) et intervient principalement sur l'axe Chastre–Gembloux, mais aussi dans l'ensemble du Brabant wallon : Wavre, Ottignies-Louvain-la-Neuve, Perwez, Court-Saint-Étienne, et au-delà sur des projets qui le justifient. N'hésitez pas à nous contacter pour discuter de votre situation.",
  },
  {
    q: "Proposez-vous des constructions biosourcées (paille, bois, chanvre) ?",
    a: "Oui. François Kerremans a une expérience concrète dans les constructions biosourcées : ossature bois, isolation paille, fibre de bois. Ces techniques répondent à la fois aux exigences de performance énergétique actuelles (PEB) et à une démarche environnementale. Elles peuvent être intégrées aussi bien dans une construction neuve que dans une rénovation, selon les contraintes du projet et le budget.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-paper-2">
      <div className="max-w-site mx-auto px-6">
        <MotionWrapper>
          <div className="max-w-[640px] mb-12">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Architecte à Chastre &amp; Gembloux — vos questions</h2>
          </div>
        </MotionWrapper>
        <div className="max-w-3xl grid gap-2">
          {faqs.map((f, i) => (
            <div key={i} className="border border-line rounded bg-white overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer hover:bg-paper transition"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-ink text-[0.97rem] leading-snug">{f.q}</span>
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className={`flex-none transition-transform duration-200 text-ink-soft ${open === i ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[0.94rem] text-ink-soft leading-relaxed border-t border-line pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
