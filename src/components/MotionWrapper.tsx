'use client'

import { useEffect, useState, ReactNode } from 'react'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then(m => ({ default: m.motion.div })),
  { ssr: false }
)

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionWrapper({ children, className, delay = 0 }: Props) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  if (!animate) return <div className={className}>{children}</div>

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </MotionDiv>
  )
}
