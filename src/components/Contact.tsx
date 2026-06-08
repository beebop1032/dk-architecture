import { ContactForm } from './ContactForm'

export function Contact() {
  const items: { k: string; v: string; href?: string }[] = [
    { k: 'Adresse', v: 'Chastre (Villeroux-Blanmont), 1450 — Brabant wallon' },
    { k: 'Téléphone', v: '+32 498 34 26 07', href: 'tel:+32498342607' },
    { k: 'Email', v: 'fk@dkarchitecture.be', href: 'mailto:fk@dkarchitecture.be' },
    { k: 'Zone', v: 'Chastre, Wavre, Gembloux, Ottignies-LLN, Perwez & alentours' },
  ]

  return (
    <section id="contact" className="py-20 bg-ink text-[#eee]">
      <div className="max-w-site mx-auto px-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="eyebrow" style={{ color: '#c9ad84' }}>Demander un devis</p>
          <h2 className="text-white">Parlons de votre projet</h2>
          <p className="mt-4 mb-7 text-[#c3c0b8]">Le premier rendez-vous est gratuit et sans engagement. Décrivez-nous votre projet, nous revenons vers vous sous 48&nbsp;h.</p>
          <ul className="grid gap-4">
            {items.map(item => (
              <li key={item.k} className="flex gap-3.5 text-[#ddd] text-[0.96rem]">
                <span className="text-[#c9ad84] font-bold min-w-[90px]">{item.k}</span>
                {item.href ? <a href={item.href} className="hover:text-white transition">{item.v}</a> : <span>{item.v}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
