import Image from 'next/image'
import { MotionWrapper } from './MotionWrapper'

export function About() {
  return (
    <section id="apropos" className="py-20 bg-paper-2">
      <div className="max-w-site mx-auto px-6 grid grid-cols-1 gap-10 items-center lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="aspect-square rounded overflow-hidden border border-line relative">
          <Image
            src="/photos/realisation-bw/480812628_1139028191248438_2690905198993266196_n.jpg"
            alt="Maison contemporaine avec extension bois et soubassement en pierre, réalisation DK architecture"
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
        <MotionWrapper>
          <div>
            <p className="eyebrow">À propos</p>
            <h2>DK architecture</h2>
            <p className="mt-4 mb-4 text-ink-soft">Installé à Chastre (Villeroux-Blanmont), au cœur du Brabant wallon, le bureau DK architecture est dirigé par l&apos;architecte François Kerremans. Un bureau à taille humaine, qui accompagne particuliers et indépendants dans leurs projets de construction et de rénovation.</p>
            <p className="mb-4 text-ink-soft">Ma conviction : une architecture contemporaine qui vous ressemble — des volumes nets, beaucoup de lumière et des matériaux nobles comme le bois. J&apos;aime aussi explorer les solutions durables et biosourcées (construction paille, fibre de bois) quand le projet s&apos;y prête.</p>
            <p className="mb-6 text-ink-soft">Proximité, écoute et transparence à chaque étape. Architecte inscrit à l&apos;Ordre des Architectes.</p>
            <a href="#contact" className="bg-ink text-white px-7 py-[15px] rounded font-semibold text-[0.95rem] hover:bg-accent-dark transition border border-ink inline-block">
              Discutons de votre projet
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
