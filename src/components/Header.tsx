'use client'
import { useState } from 'react'
import Image from 'next/image'
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
          <span>Bureau d&apos;architecture <span className="text-accent">·</span> Chastre, Brabant wallon</span>
          <div className="flex gap-5 items-center">
            <a href="tel:+32498342607" className="hover:text-white transition">+32 498 34 26 07</a>
            <a href="mailto:fk@dkarchitecture.be" className="hover:text-white transition hidden sm:block">fk@dkarchitecture.be</a>
          </div>
        </div>
      </div>
      {/* Nav */}
      <div className="bg-paper/90 backdrop-blur-md border-b border-line relative">
        <div className="max-w-site mx-auto px-6 flex items-center justify-between h-[78px]">
          <Link href="/" className="flex items-center gap-3" aria-label="DK architecture, accueil">
            <Image src="/logo-mark.png" alt="" width={40} height={40} className="flex-none" />
            <span className="flex flex-col leading-none">
              <span className="font-normal text-[1.32rem] tracking-wide text-brand-grey">
                <strong className="font-semibold text-accent-dark">DK</strong> architecture
              </span>
              <span className="text-[0.6rem] tracking-[0.26em] uppercase text-ink-soft mt-1.5">
                F. Kerremans <strong className="text-accent-dark">·</strong> Chastre
              </span>
            </span>
          </Link>
          <nav className={`gap-7 items-center ${open ? 'flex absolute top-[78px] left-0 right-0 flex-col bg-paper px-6 py-5 border-b border-line z-50' : 'hidden md:flex'}`} id="menu">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[0.92rem] text-ink-soft hover:text-ink transition">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-ink text-white px-7 py-3.5 rounded text-[0.95rem] font-semibold hover:bg-accent-dark transition border border-ink">
              Demander un devis
            </a>
          </nav>
          <button className="md:hidden text-2xl" onClick={() => setOpen(o => !o)} aria-label="Menu">☰</button>
        </div>
      </div>
    </header>
  )
}
