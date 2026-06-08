import Image from 'next/image'
import { MotionWrapper } from './MotionWrapper'

export function About() {
  return (
    <section id="apropos" className="py-20 bg-paper-2">
      <div className="max-w-site mx-auto px-6 grid grid-cols-1 gap-10 items-center lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="aspect-square rounded overflow-hidden border border-line relative">
          <Image
            src="/photos/realisation-bw/extension-bois-soubassement-pierre-brabant-wallon.jpg"
            alt="Maison contemporaine avec extension bois et soubassement en pierre, réalisation François Kerremans"
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
        <MotionWrapper>
          <div>
            <p className="eyebrow">À propos</p>
            <h2>Votre architecte à Chastre, Walhain &amp; Gembloux</h2>
            <p className="mt-4 mb-4 text-ink-soft">Installé à Chastre (Villeroux-Blanmont), entre Gembloux, Walhain et Perwez, au cœur du Brabant wallon, François Kerremans est architecte à taille humaine — il accompagne particuliers et indépendants dans leurs projets de construction, rénovation et extension à Chastre, Walhain, Gembloux, Cortil-Noirmont, Noirhat, Ernage, Grand-Leez, Nil-Saint-Vincent et au-delà.</p>
            <p className="mb-4 text-ink-soft">Ma conviction : une architecture contemporaine qui vous ressemble — volumes nets, lumière naturelle, matériaux nobles. Pour les projets qui le permettent, j&apos;intègre des solutions éco-responsables : ossature bois, isolation en bottes de paille, fibre de bois, chanvre, toiture végétalisée. Ces choix réduisent l&apos;empreinte carbone, améliorent le confort thermique et permettent d&apos;atteindre les niveaux PEB A, passif ou quasi zéro énergie.</p>
            <p className="mb-6 text-ink-soft">Proximité, écoute et transparence à chaque étape. Architecte inscrit à l&apos;Ordre des Architectes de Belgique.</p>
            <a href="#contact" className="bg-ink text-white px-7 py-[15px] rounded font-semibold text-[0.95rem] hover:bg-accent-dark transition border border-ink inline-block">
              Discutons de votre projet
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
