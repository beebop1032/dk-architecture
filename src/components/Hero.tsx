import Image from 'next/image'
import { MotionWrapper } from './MotionWrapper'
import { HeroBlueprint } from './HeroBlueprint'

export function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden" style={{ backgroundColor: '#0e0e0b' }}>

      {/* Photo — plein écran mobile, moitié droite desktop */}
      <div className="absolute inset-0 md:left-[50%]">
        <Image
          src="/photos/realisation-bw/maison-contemporaine-bardage-bois-terrasse-brabant-wallon.jpg"
          alt="Maison contemporaine avec bardage bois et terrasse, réalisation DK Architecture en Brabant wallon"
          fill
          priority
          className="object-cover object-[center_45%]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Mobile : dégradé sombre pour lisibilité du texte */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{ background: 'linear-gradient(to top, rgba(14,14,11,0.96) 0%, rgba(14,14,11,0.70) 45%, rgba(14,14,11,0.35) 75%, rgba(14,14,11,0.15) 100%)' }}
        />
        {/* Desktop : fondu bord gauche vers fond sombre */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{ background: 'linear-gradient(to right, #0e0e0b 0%, rgba(14,14,11,0.55) 22%, rgba(14,14,11,0.12) 55%, transparent 100%)' }}
        />
        {/* Blueprint — desktop uniquement */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ opacity: 0.35 }}>
          <HeroBlueprint />
        </div>
      </div>

      {/* Contenu texte */}
      <div className="relative z-10 min-h-dvh flex flex-col justify-end max-w-site mx-auto px-6 pb-24 pt-40">
        <MotionWrapper>
          <div className="md:max-w-[460px]">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: '#c9ad84' }}>
              Bureau d&apos;architecture · Chastre &amp; Gembloux, Brabant wallon
            </p>
            <h1 className="text-white mb-5 leading-[1.1]" style={{ fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)' }}>
              Architecte à Chastre et Gembloux — construire ou rénover en Brabant wallon
            </h1>
            <p className="text-white/70 mb-8 leading-relaxed" style={{ fontSize: '1.05rem' }}>
              Des maisons qui vous ressemblent — volumes nets, lumière naturelle, matériaux nobles,
              conçus dans les moindres détails pour votre façon de vivre et votre budget.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-accent-dark text-white px-8 py-4 rounded font-semibold text-[0.95rem] hover:bg-accent transition border border-accent-dark cursor-pointer"
              >
                Demander un devis gratuit
              </a>
              <a
                href="#realisations"
                className="text-white px-8 py-4 rounded font-semibold text-[0.95rem] hover:bg-white/10 transition border border-white/40 cursor-pointer"
              >
                Voir les réalisations
              </a>
            </div>
          </div>
        </MotionWrapper>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ opacity: 0.5 }}
      >
        <span className="text-white text-[0.62rem] uppercase tracking-[0.2em] font-bold">Découvrir</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
