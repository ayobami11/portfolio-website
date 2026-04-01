'use client'

import { motion } from 'framer-motion'

export default function SidebarLeft() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="fixed bottom-0 left-10 z-10 hidden lg:flex flex-col items-center gap-6"
    >
      <a
        href="mailto:ayobami.tunwase@gmail.com"
        className="font-mono text-[10.5px] tracking-[0.16em] text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 [writing-mode:vertical-rl]"
      >
        ayobami.tunwase@gmail.com
      </a>
      <div className="w-px h-24 bg-border" />
    </motion.div>
  )
}
