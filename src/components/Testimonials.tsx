import { MotionWrapper } from './MotionWrapper'

const quotes = [
  { text: '"Un accompagnement du début à la fin. Notre rénovation est restée dans le budget et le résultat dépasse nos attentes."', who: '— Famille D., Chastre' },
  { text: '"Réactif et de bon conseil à chaque étape. Le dossier de permis a été géré sans le moindre stress de notre côté."', who: '— Marc V., Gembloux' },
  { text: '"Pour notre petit immeuble de logements, un partenaire fiable et carré sur les délais. On retravaillera ensemble."', who: '— SPRL Habitat, Ottignies' },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <p className="eyebrow">Ils nous ont fait confiance</p>
          <h2>Ce que disent nos clients</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <MotionWrapper key={i} delay={i * 0.1}>
              <div className="bg-white border border-line rounded p-7">
                <div className="text-accent tracking-widest mb-3.5">★★★★★</div>
                <p className="text-ink mb-4">{q.text}</p>
                <p className="text-[0.85rem] text-ink-soft font-semibold">{q.who}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
