'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 sm:px-10 lg:px-8 w-full lg:w-11/12 py-24">

      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.p
          variants={item}
          className="font-mono text-primary text-sm mb-5 tracking-[0.15em] uppercase"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-secondary font-bold leading-[1.05] mb-5
                     text-[clamp(34px,7vw,78px)]"
        >
          Ayobami Tunwase.
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-secondary font-bold leading-[1.1] mb-8
                     text-[clamp(20px,4.5vw,52px)] text-muted-foreground"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          variants={item}
          className="max-w-[520px] text-muted-foreground leading-relaxed mb-12 text-[1.05rem]"
        >
          Frontend developer based in Lagos, Nigeria — specialising in crafting
          accessible, performant applications with React &amp; Next.js. Currently
          expanding my expertise into cybersecurity.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <Link
            href="/resume"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'rounded-full px-8 gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40'
            )}
          >
            View my CV
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'rounded-full px-8 gap-2 border-border hover:border-primary hover:text-primary hover:bg-primary/5'
            )}
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
