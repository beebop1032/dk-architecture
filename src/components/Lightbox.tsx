'use client'

import { useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import type { Photo } from '@/data/projects'

interface LightboxProps {
  photos: Photo[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[currentIndex]
  const nextPhoto = photos[currentIndex + 1]

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const startXRef = useRef(0)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
      onClick={onClose}
      onPointerDown={e => { startXRef.current = e.clientX }}
      onPointerUp={e => {
        const diff = e.clientX - startXRef.current
        if (diff > 60) onPrev()
        if (diff < -60) onNext()
      }}
    >
      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:text-gray-300 z-10 disabled:opacity-30 cursor-pointer transition-opacity"
        onClick={e => { e.stopPropagation(); onPrev() }}
        aria-label="Photo précédente"
        disabled={currentIndex === 0}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      <div className="relative w-full max-w-5xl mx-12 sm:mx-16" onClick={e => e.stopPropagation()}>
        <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
          <Image src={photo.src} alt={photo.alt} fill className="object-contain" priority sizes="(max-width: 1024px) 100vw, 80vw" />
          {nextPhoto && (
            <Image src={nextPhoto.src} alt="" fill className="opacity-0 pointer-events-none" sizes="1px" aria-hidden={true} />
          )}
        </div>
        <p className="text-center text-white/60 text-sm mt-3 select-none">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>

      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:text-gray-300 z-10 disabled:opacity-30 cursor-pointer transition-opacity"
        onClick={e => { e.stopPropagation(); onNext() }}
        aria-label="Photo suivante"
        disabled={currentIndex === photos.length - 1}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <button
        className="absolute top-4 right-4 text-white p-2 hover:text-gray-300 z-10 cursor-pointer transition-opacity"
        onClick={onClose}
        aria-label="Fermer la galerie"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  )
}
