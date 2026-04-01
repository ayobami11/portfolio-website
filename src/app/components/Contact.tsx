'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
          'rounded-full px-10 gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 mb-16'
        )}
      >
        <Mail className="h-4 w-4" />
        Say Hello
      </a>

    </motion.section>
  )
}
