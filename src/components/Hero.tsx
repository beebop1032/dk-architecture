import Image from 'next/image'
import { MotionWrapper } from './MotionWrapper'
import { HeroBlueprint } from './HeroBlueprint'

export function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-end overflow-hidden">

      {/* Photo plein écran */}
      <Image
        src="/photos/realisation-bw/maison-contemporaine-bardage-bois-terrasse-brabant-wallon.jpg"
        alt="Maison contemporaine avec bardage bois et terrasse, réalisation DK Architecture en Brabant wallon"
        fill
        priority
        className="object-cover object-[center_45%]"
        sizes="100vw"
      />

      {/* Voile général léger */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(14,14,11,0.28)' }} />

      {/* Gradient bas → haut : zone texte */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(14,14,11,0.94) 0%, rgba(14,14,11,0.65) 32%, rgba(14,14,11,0.22) 58%, transparent 80%)' }}
      />

      {/* Gradient gauche → droite : lisibilité texte sans noircir la droite */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{ background: 'linear-gradient(to right, rgba(14,14,11,0.60) 0%, rgba(14,14,11,0.22) 38%, transparent 62%)' }}
      />

      {/* Blueprint — moitié droite, fond photo visible */}
      <div
        className="absolute right-0 top-0 h-full pointer-events-none hidden md:block"
        style={{
          width: '58%',
          opacity: 0.32,
          maskImage: 'linear-gradient(to right, transparent 0%, white 22%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 22%)',
        }}
      >
        <HeroBlueprint />
      </div>

      {/* Contenu texte */}
      <div className="relative z-10 w-full max-w-site mx-auto px-6 pb-24 pt-40">
        <MotionWrapper>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: '#c9ad84' }}>
            Bureau d&apos;architecture · Chastre &amp; Gembloux, Brabant wallon
          </p>
          <h1
            className="text-white max-w-[20ch] mb-5 leading-[1.1]"
            style={{ fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)' }}
          >
            Architecte à Chastre et Gembloux — construire ou rénover en Brabant wallon
          </h1>
          <p className="text-white/72 max-w-[52ch] mb-8 leading-relaxed" style={{ fontSize: '1.05rem' }}>
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
