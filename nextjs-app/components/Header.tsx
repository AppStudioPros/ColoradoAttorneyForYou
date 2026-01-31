'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/unemployment-appeals', label: 'Unemployment Appeals' },
    { path: '/other-areas', label: 'Other Areas' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-16 w-auto bg-primary rounded-lg p-2 relative">
            <Image
              src="/warren-logo-white.png"
              alt="Law Office of Warren J. Domangue"
              width={80}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-primary text-sm font-semibold leading-tight">
              Law Office of
            </span>
            <span className="text-primary text-sm font-semibold leading-tight">
              Warren J. Domangue
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-[900px]:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(link.path) ? 'text-accent' : 'text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+17204957315" className="ml-2">
            <button className="rounded-full bg-accent text-white px-5 h-10 hover:bg-accent-hover transition-colors shadow-md">
              Call (720) 495-7315
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="min-[900px]:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg min-[900px]:hidden">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-accent ${
                    isActive(link.path) ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+17204957315"
                className="mt-4"
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full rounded-full bg-accent text-white py-3 hover:bg-accent-hover transition-colors">
                  Call (720) 495-7315
                </button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
