'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface LawIconProps {
  name: string
  size?: number
  className?: string
  animate?: boolean
}

export default function LawIcon({ name, size = 32, className = '', animate = true }: LawIconProps) {
  const iconRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!animate) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-10% 0px' }
    )

    if (iconRef.current) {
      observer.observe(iconRef.current)
    }

    return () => observer.disconnect()
  }, [animate])

  const iconMap: Record<string, string> = {
    balance: 'balance.svg',
    baton: 'baton.svg',
    book: 'book.svg',
    briefcase: 'briefcase.svg',
    case: 'case.svg',
    contract: 'contract.svg',
    courthouse: 'courthouse.svg',
    gavel: 'gavel.svg',
    handcuffs: 'handcuffs.svg',
    handshake: 'handshake.svg',
    judge: 'judge.svg',
    law: 'law.svg',
    lawyer: 'lawyer.svg',
    pillars: 'pillars.svg',
  }

  const iconFile = iconMap[name] || 'balance.svg'

  return (
    <div
      ref={iconRef}
      className={`inline-flex items-center justify-center transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'
      } ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      <img
        src={`/icons/${iconFile}`}
        alt={name}
        className="w-full h-full object-contain"
        style={{
          filter:
            'invert(56%) sepia(44%) saturate(1748%) hue-rotate(135deg) brightness(91%) contrast(89%)',
        }}
      />
    </div>
  )
}
