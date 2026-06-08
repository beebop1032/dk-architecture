import Image from 'next/image'
import { MotionWrapper } from './MotionWrapper'

export function Hero() {
  return (
    <section className="py-[90px] pb-20 overflow-hidden">
      <div className="max-w-site mx-auto px-6 grid grid-cols-1 gap-10 items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <MotionWrapper>
          <p className="eyebrow">Bureau d&apos;architecture · Chastre &amp; Gembloux, Brabant wallon</p>
          <h1>Architecte à Chastre et Gembloux — construire ou rénover en Brabant wallon, avec un expert qui pense aussi à votre budget.</h1>
          <p className="text-[1.18rem] text-ink-soft mt-5 mb-8 max-w-[46ch]">
            Bureau d&apos;architecture à taille humaine, je conçois des maisons et rénovations contemporaines — volumes nets, lumière et matériaux nobles — avec, quand le projet s&apos;y prête, des solutions durables et biosourcées. Du premier croquis à la remise des clés, en Brabant wallon.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a href="#contact" className="bg-ink text-white px-7 py-[15px] rounded text-[0.95rem] font-semibold hover:bg-accent-dark transition border border-ink">
              Demander un devis gratuit
            </a>
            <a href="#realisations" className="bg-transparent text-ink px-7 py-[15px] rounded text-[0.95rem] font-semibold hover:bg-ink hover:text-white transition border border-ink">
              Voir les réalisations
            </a>
          </div>
        </MotionWrapper>
        <div className="aspect-[4/5] rounded overflow-hidden border border-line relative">
          <Image
            src="/photos/realisation-bw/maison-contemporaine-bardage-bois-terrasse-brabant-wallon.jpg"
            alt="Maison contemporaine avec bardage bois et terrasse, réalisation DK architecture en Brabant wallon"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  )
}
