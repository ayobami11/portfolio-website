'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Folder } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const listReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const projects = [
  {
    name: 'Gospel Companion',
    description:
      'An AI-powered digital assistant that enhances the experience of studying bible lessons and gospel materials.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Zod'],
    live: 'https://gospelcompanion.vercel.app/',
    github: 'https://github.com/ayobami11/gospel-companion',
  },
  {
    name: 'Tweetter',
    description:
      'A full-stack social media platform inspired by X (formerly Twitter), serving 100+ registered users.',
    stack: ['React.js', 'Express', 'Material UI', 'MongoDB'],
    live: 'https://tweetteer.netlify.app',
    github: 'https://github.com/ayobami11/twitter-frontend',
  },
  {
    name: 'Todo',
    description:
      'A full-stack task manager with filtering, status tracking, and a multi-theme color system.',
    stack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth'],
    live: 'https://todo-app-ayo.vercel.app',
    github: 'https://github.com/ayobami11/todo',
  },
  {
    name: 'Space Tourism',
    description:
      'A multi-page website for a fictional space travel agency with smooth page transitions.',
    stack: ['Next.js', 'CSS Modules', 'Swiper JS'],
    live: 'https://space-tourism-ayo.vercel.app',
    github: 'https://github.com/ayobami11/space-tourism',
  },
  {
    name: 'Compress IPv6 Address',
    description:
      'Converts IPv6 addresses to compressed format using an efficient linear-time sliding window algorithm.',
    stack: ['Next.js', 'Shadcn UI', 'Tailwind CSS'],
    live: 'https://compress-ipv6-address.vercel.app',
    github: 'https://github.com/ayobami11/compress-ipv6-address',
  },
  {
    name: 'Rock, Paper, Scissors',
    description:
      'An animated twist on the classic game built with React and Framer Motion.',
    stack: ['React.js', 'Styled Components', 'Framer Motion'],
    live: 'https://rock-paper-scissors-ls.netlify.app/',
    github: 'https://github.com/ayobami11/rock-paper-scissors',
  },
  {
    name: 'Where In The World?',
    description:
      'A web application that displays real-time information about countries of the world using a public REST API.',
    stack: ['React.js', 'Styled Components'],
    live: 'https://where-in-the-world-react.netlify.app/',
    github: 'https://github.com/ayobami11/countries-app',
  },
  {
    name: 'Advice Generator',
    description:
      'A single-page website that autogenerates random advice using the Advice Slip API.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://ayobami11.github.io/30DaysOfCode/day-17/',
    github: 'https://github.com/ayobami11/30DaysOfCode/tree/main/day-17',
  },
  {
    name: 'URL Shortener',
    description:
      'An online tool that accepts long URLs and generates shortened links that are shareable and easy to remember.',
    stack: ['React.js', 'Styled Components', 'Shortly API'],
    live: 'https://url-shrtener.netlify.app',
    github: 'https://github.com/ayobami11/url-shortener',
  },
  {
    name: 'Calculator',
    description:
      'A simple calculator that performs basic arithmetic operations with a clean, themed interface.',
    stack: ['React.js', 'Styled Components'],
    live: 'https://ayo-calc.netlify.app',
    github: 'https://github.com/ayobami11/calculator',
  },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-8 w-full lg:w-11/12 mb-32"
    >
      {/* Numbered heading */}
      <div className="flex items-center gap-3 mb-14">
        <span className="font-mono text-primary text-base">02.</span>
        <h2>Projects</h2>
      </div>

      <motion.ul
        variants={listReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.li key={project.name} variants={cardReveal}>
            <Card className="h-full flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/10 hover:border-border/80">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-5">
                  <Folder
                    className="h-9 w-9 text-primary transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live site"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink className="h-[18px] w-[18px]" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <FiGithub className="h-[18px] w-[18px]" />
                    </a>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-[11px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  )
}
