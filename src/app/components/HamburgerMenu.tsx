'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAppContext } from '@/contexts/app'
import ToggleModeSwitch from '@/components/ToggleModeSwitch'

const asideVariants = {
  initial: { opacity: 0, x: '100%' },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.645, 0.045, 0.355, 1] },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.25, ease: [0.645, 0.045, 0.355, 1] },
  },
}

const listVariants = {
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

const navLinks = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Projects', href: '#projects' },
  { num: '03', label: 'Contact', href: '#contact' },
]

export default function HamburgerMenu() {
  const { dispatch } = useAppContext()
  const closeMenu = () => dispatch({ type: 'CLOSE_MENU' })

  return (
    <>
      {/* Dim overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-20 bg-background/60 backdrop-blur-sm md:hidden"
        onClick={closeMenu}
      />

      {/* Side panel */}
      <motion.aside
        className="fixed inset-y-0 right-0 z-20 w-72 min-h-screen bg-card border-l border-border flex flex-col items-center justify-center md:hidden shadow-2xl"
        variants={asideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <nav className="w-full px-10">
          <motion.ol
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col gap-8 list-none"
          >
            {navLinks.map(({ num, label, href }) => (
              <motion.li key={label} variants={itemVariants} onClick={closeMenu}>
                <a
                  href={href}
                  className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-mono text-primary text-xs">{num}.</span>
                  <span className="text-lg font-medium">{label}</span>
                </a>
              </motion.li>
            ))}

            <motion.li variants={itemVariants} onClick={closeMenu}>
              <Link
                href="/resume"
                className="block text-center font-mono text-sm px-6 py-2.5 rounded border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Resume
              </Link>
            </motion.li>

            <motion.li variants={itemVariants} className="flex justify-center pt-2">
              <ToggleModeSwitch />
            </motion.li>
          </motion.ol>
        </nav>
      </motion.aside>
    </>
  )
}
