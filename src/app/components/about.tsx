'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    label: 'Backend & DB',
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Python'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'Zod', 'Shadcn UI', 'Tanstack Query', 'Framer Motion'],
  },
]

export default function About() {
  return (
    <motion.section
      id="about"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-8 w-full lg:w-11/12 mb-32"
    >
      {/* Numbered heading */}
      <div className="flex items-center gap-3 mb-14">
        <span className="font-mono text-primary text-base">01.</span>
        <h2>About Me</h2>
      </div>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16">

        {/* Bio */}
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a frontend web developer based in Lagos, Nigeria. I specialise in
            transforming pixel-perfect designs into fully-fledged, responsive web
            interfaces that are accessible and easy to scale.
          </p>
          <p>
            With a keen eye for detail and a strong focus on performance and secure
            coding practices, I endeavour to build websites that are not only
            interactive but resilient across various devices and browsers.
          </p>
          <p>
            I&apos;m currently pursuing a B.Sc. in Computer Engineering (First Class)
            at the University of Lagos while actively expanding my expertise into
            cybersecurity — building safer, more resilient systems.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-7">
          {skillGroups.map(({ label, skills }) => (
            <div key={label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary mb-3">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-mono text-[11px] px-2.5 py-0.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}
