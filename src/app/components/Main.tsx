'use client'

import { AnimatePresence } from 'framer-motion'
import { useAppContext } from '@/contexts/app'

import HamburgerMenu from '@/components/HamburgerMenu'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Main() {
  const { state } = useAppContext()

  return (
    <main>
      <AnimatePresence>
        {state.isMenuOpen && <HamburgerMenu />}
      </AnimatePresence>

      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="text-center py-6 text-xs font-mono text-muted-foreground">
        Design inspired by{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Brittany Chiang
        </a>
        {' · '}
        Built by{' '}
        <a
          href="https://github.com/ayobami11"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Ayobami Tunwase
        </a>
      </footer>
    </main>
  )
}
