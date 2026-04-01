'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const links = [
  { href: 'https://github.com/ayobami11', icon: FiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/ayobami-tunwase', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://x.com/TunwaseAyobami', icon: XIcon, label: 'X (Twitter)' },
]

export default function SidebarRight() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="fixed bottom-0 right-10 z-10 hidden lg:flex flex-col items-center gap-5"
    >
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
      <div className="w-px h-24 bg-border" />
    </motion.div>
  )
}
