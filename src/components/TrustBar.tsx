const stats = [
  { n: 'Brabant wallon', l: '& alentours' },
  { n: 'Contemporain', l: 'maisons & extensions' },
  { n: 'Biosourcé', l: 'bois, paille, fibre' },
  { n: 'Devis gratuit', l: 'premier rendez-vous' },
]

export function TrustBar() {
  return (
    <div className="border-t border-b border-line bg-paper-2">
      <div className="max-w-site mx-auto px-6 flex flex-wrap gap-x-12 gap-y-4 justify-between py-6 sm:flex-col">
        {stats.map(s => (
          <div key={s.n}>
            <div className="text-[1.9rem] font-bold text-ink">{s.n}</div>
            <div className="text-[0.82rem] text-ink-soft uppercase tracking-widest">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
