'use client'

import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { projects } from '@/data/projects'
import { MotionWrapper } from './MotionWrapper'

const Lightbox = dynamic(() => import('./Lightbox').then(m => m.Lightbox), { ssr: false })

export function Portfolio() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [photoIdx, setPhotoIdx] = useState(0)

  const currentPhotos = openIdx !== null ? projects[openIdx].photos : []

  return (
    <section id="realisations" className="py-20 bg-paper-2">
      <div className="max-w-site mx-auto px-6">
        <MotionWrapper>
          <div className="max-w-[640px] mb-12">
            <p className="eyebrow">Réalisations</p>
            <h2>Un aperçu de mes projets</h2>
            <p className="mt-3.5 text-[1.05rem] text-ink-soft">Chaque projet est unique. Voici quelques réalisations représentatives de mon travail en Brabant wallon.</p>
          </div>
        </MotionWrapper>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className="aspect-square rounded overflow-hidden border border-line relative cursor-pointer group"
              onClick={() => { setOpenIdx(i); setPhotoIdx(0) }}
            >
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3.5">
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{p.title}</p>
                  <p className="text-white/80 text-xs mt-0.5">{p.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-soft italic">Quelques réalisations récentes. D&apos;autres projets disponibles sur demande.</p>
      </div>

      {openIdx !== null && (
        <Lightbox
          photos={currentPhotos}
          currentIndex={photoIdx}
          onClose={() => setOpenIdx(null)}
          onPrev={() => setPhotoIdx(i => Math.max(0, i - 1))}
          onNext={() => setPhotoIdx(i => Math.min(currentPhotos.length - 1, i + 1))}
        />
      )}
    </section>
  )
}
