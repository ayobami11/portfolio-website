'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { href: 'https://github.com/ayobami11', icon: FiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/ayobami-tunwase', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://x.com/TunwaseAyobami', icon: XIcon, label: 'X (Twitter)' },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="text-center max-w-xl mx-auto px-6 sm:px-10 w-full py-24"
    >
      <p className="font-mono text-primary text-[11px] uppercase tracking-[0.18em] mb-5">
        03. What&apos;s next?
      </p>

      <h2 className="text-4xl md:text-5xl font-bold font-secondary mb-6 leading-tight">
        Get In Touch
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-10 text-[1.0625rem]">
        I&apos;m currently open to new opportunities. Whether you have a project in
        mind, a question, or just want to say hello — my inbox is always open.
      </p>

      <a
        href="mailto:ayobami.tunwase@gmail.com"
        className={cn(
          buttonVariants({ size: 'lg' }),
          'rounded-full px-10 gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 mb-10'
        )}
      >
        <Mail className="h-4 w-4" />
        Say Hello
      </a>

      <div className="flex lg:hidden justify-center gap-6 mb-16">
        {socialLinks.map(({ href, icon: Icon, label }) => (
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
      </div>

    </motion.section>
  )
}
