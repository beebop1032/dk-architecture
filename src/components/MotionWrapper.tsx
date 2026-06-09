'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionWrapper({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Skip animation for content already visible (above the fold) — avoids LCP flash
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    if (delay > 0) el.style.transitionDelay = `${delay}s`
    el.classList.add('motion-hidden')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('motion-revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return <div ref={ref} className={className}>{children}</div>
}
