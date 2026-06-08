'use client'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#demarche', label: 'Démarche' },
    { href: '#apropos', label: 'À propos' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Topbar */}
      <div className="bg-ink text-[#d6d5d2] text-xs tracking-wide">
        <div className="max-w-site mx-auto px-6 flex justify-between items-center h-[38px]">
          <span>Bureau d&apos;architecture <span className="text-accent">·</span> Chastre — Gembloux, Brabant wallon</span>
          <div className="flex gap-5 items-center">
            <a href="tel:+32498342607" className="hover:text-white transition">+32 498 34 26 07</a>
            <a href="mailto:fk@dkarchitecture.be" className="hover:text-white transition hidden sm:block">fk@dkarchitecture.be</a>
          </div>
        </div>
      </div>
      {/* Nav */}
      <div className="bg-paper/90 backdrop-blur-md border-b border-line relative">
        <div className="max-w-site mx-auto px-6 flex items-center justify-between h-[78px]">
          <Link href="/" className="flex flex-col leading-none gap-[5px]" aria-label="François Kerremans, architecte — accueil">
            <span
              className="font-normal text-[1.18rem] text-ink"
              style={{ fontFamily: 'var(--font-cinzel), Georgia, serif', letterSpacing: '0.01em' }}
            >
              François Kerremans
            </span>
            <div className="h-px bg-line w-full" />
            <span
              className="font-light text-[0.57rem] text-brand-grey"
              style={{ fontFamily: 'var(--font-josefin), sans-serif', letterSpacing: '0.42em' }}
            >
              architecte
            </span>
          </Link>
          <nav className={`gap-7 items-center ${open ? 'flex absolute top-[78px] left-0 right-0 flex-col bg-paper px-6 py-5 border-b border-line z-50' : 'hidden md:flex'}`} id="menu">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[0.92rem] tracking-wide text-ink-soft hover:text-ink transition cursor-pointer">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-ink text-white px-7 py-3.5 rounded text-[0.95rem] font-semibold hover:bg-accent-dark transition border border-ink cursor-pointer">
              Demander un devis
            </a>
          </nav>
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setOpen(o => !o)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
