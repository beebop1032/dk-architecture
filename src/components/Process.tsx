import { MotionWrapper } from './MotionWrapper'

const steps = [
  { title: 'Rencontre & écoute', desc: 'Premier rendez-vous gratuit pour comprendre votre projet, vos envies et votre budget.' },
  { title: 'Conception', desc: "Esquisses, plans et estimation budgétaire. On affine ensemble jusqu'au projet idéal." },
  { title: 'Permis & dossier', desc: "Constitution du dossier de permis d'urbanisme et des missions techniques nécessaires." },
  { title: 'Chantier & réception', desc: 'Suivi des travaux, coordination des entreprises et réception finale.' },
]

export function Process() {
  return (
    <section id="demarche" className="py-20">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <p className="eyebrow">Notre démarche</p>
          <h2>Comment travaille votre architecte en Brabant wallon ?</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <MotionWrapper key={s.title} delay={i * 0.1}>
              <div className="pt-6 border-t-2 border-ink">
                <span className="font-bold text-[1.4rem] text-accent-dark">0{i + 1}</span>
                <h3 className="mt-2 mb-2">{s.title}</h3>
                <p className="text-[0.92rem] text-ink-soft">{s.desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
