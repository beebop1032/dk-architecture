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
    a: "Les honoraires d'un architecte en Belgique varient selon la mission confiée et la complexité du projet. Ils représentent généralement entre 8 % et 12 % du coût total des travaux pour une mission complète (conception + permis + suivi de chantier). Pour une mission partielle — permis d'urbanisme uniquement ou suivi de chantier seul — la facturation est souvent forfaitaire. Le premier rendez-vous est gratuit et sans engagement.",
  },
  {
    q: "Quel est le délai pour obtenir un permis d'urbanisme en Brabant wallon ?",
    a: "En Brabant wallon, le délai légal d'instruction d'un permis d'urbanisme est de 60 jours pour les dossiers simples (urbanisme ordinaire) et de 115 jours pour les dossiers complexes soumis à enquête publique. Ce délai court à compter du dépôt du dossier complet. Un dossier bien préparé et conforme aux règles urbanistiques locales évite les demandes de pièces complémentaires, qui suspendent ce délai.",
  },
  {
    q: "Dans quelles communes François Kerremans intervient-il ?",
    a: "François Kerremans est basé à Chastre (Villeroux-Blanmont) et intervient en priorité dans les communes voisines : Walhain (Saint-Géry, Tourinnes-Saint-Lambert), Gembloux (Ernage, Grand-Leez, Les Isnes, Beuzet, Lonzée), Perwez, Sombreffe, Court-Saint-Étienne, Nil-Saint-Vincent-Saint-Martin, ainsi que dans l'ensemble du Brabant wallon — Wavre, Ottignies-Louvain-la-Neuve, Villers-la-Ville — et au-delà selon les projets.",
  },
  {
    q: "Proposez-vous des constructions biosourcées et éco-responsables ?",
    a: "Oui — c'est même une spécialité. François Kerremans maîtrise les constructions en ossature bois, isolation en bottes de paille, fibre de bois et chanvre. Ces techniques permettent d'atteindre des niveaux PEB A, maison passive (quasi zéro énergie) ou BBC tout en réduisant significativement l'empreinte carbone du bâtiment. Elles s'appliquent aussi bien à une construction neuve qu'à une rénovation profonde, et s'adaptent à tous les budgets. Le surcoût par rapport au traditionnel est souvent compensé par les économies d'énergie sur le long terme.",
  },
  {
    q: "Qu'est-ce qu'une maison passive et est-ce adapté en Brabant wallon ?",
    a: "Une maison passive est une construction qui minimise ses besoins en chauffage et en climatisation grâce à une isolation poussée, une étanchéité à l'air irréprochable, des vitrages performants et une ventilation double flux avec récupération de chaleur. En Brabant wallon, le climat tempéré s'y prête parfaitement : les maisons passives y sont particulièrement efficaces et confortables. Elles peuvent bénéficier de primes énergie en Région wallonne et permettent une quasi-indépendance énergétique.",
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
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer hover:bg-paper transition touch-manipulation"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
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
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="px-6 pb-5 text-[0.94rem] text-ink-soft leading-relaxed border-t border-line pt-4"
                >
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
