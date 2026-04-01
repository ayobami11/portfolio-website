'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { useAppContext } from '@/contexts/app'
import HamburgerBtn from '@/components/HamburgerBtn'
import ToggleModeSwitch from '@/components/ToggleModeSwitch'

const navLinks = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Projects', href: '#projects' },
  { num: '03', label: 'Contact', href: '#contact' },
]

export default function Header() {
  const { state } = useAppContext()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 backdrop-blur-xl bg-background/80 border-b border-border/60 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6 md:px-10 xl:px-24">

        {/* Logo */}
        <Link
          href="/"
          className={`hover:opacity-75 transition-opacity ${
            state.isMenuOpen ? 'opacity-0 pointer-events-none' : ''
          }`}
          aria-label="Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Ayobami Tunwase"
            width={40}
            height={34}
            className="shrink-0 dark:invert"
          />
        </Link>

        {/* Desktop nav */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <ol className="flex items-center gap-6 list-none">
              {navLinks.map(({ num, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span className="font-mono text-primary text-[11px]">{num}.</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
            <Link
              href="/resume"
              className="font-mono text-sm px-4 py-2 rounded-full border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Resume
            </Link>
          </nav>

          <div className="hidden md:block">
            <ToggleModeSwitch />
          </div>

          <HamburgerBtn />
        </div>
      </div>
    </motion.header>
  )
}
