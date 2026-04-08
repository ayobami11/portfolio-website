"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Download,
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Code2,
  FolderOpen,
  ExternalLink,
  Phone,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── Animation variants ────────────────────────────────────────── */
const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ─── Data ───────────────────────────────────────────────────────── */
const experience = [
  {
    company: "Cyberdata Foundation",
    role: "Frontend Web Developer",
    period: "Nov 2025 – Present",
    location: "Remote",
    bullets: [
      "Developed and maintained responsive web interfaces using React.js, TypeScript, and Tailwind CSS, improving page load speed by ~30% and accessibility for 500+ active users.",
      "Integrated the organisation's website with a Node.js and Firebase backend, enabling real-time data synchronisation and secure user authentication.",
      "Enhanced frontend security by implementing Zod for input validation and Shadcn UI for lightweight components, reducing XSS risk by 70% and decreasing codebase size by 25%.",
    ],
  },
  {
    company: "MTN Nigeria",
    role: "Information Technology Intern",
    period: "Apr 2025 – Oct 2025",
    location: "Lagos, Nigeria",
    bullets: [
      "Led a 3-member frontend team to build a scalable UI with Next.js, Tailwind CSS, and Tanstack Query, optimising data fetching and overall responsiveness.",
      "Collaborated with a 23-member cross-functional software engineering team to design, develop, and deploy an intern onboarding platform that earned executive approval from the acting CIO.",
      "Prepared technical documentation and mentored team members, resulting in improved development efficiency and consistent code quality.",
    ],
  },
];

const education = [
  {
    school: "University of Lagos",
    degree: "B.Sc. Computer Engineering (First Class)",
    location: "Lagos, Nigeria",
    period: "Expected September 2026",
  },
  {
    school: "AltSchool Africa",
    degree: "Diploma in Cybersecurity",
    location: "Remote",
    period: "Mar 2025 – Mar 2026",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend & DB",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Python"],
  },
  {
    label: "Tools & Libraries",
    skills: ["Git", "Zod", "Shadcn UI", "Tanstack Query", "Framer Motion"],
  },
];

const projects = [
  {
    name: "Gospel Companion",
    period: "Aug 2025",
    description:
      "Implemented the frontend of an AI-powered web application using React.js, TypeScript, and Tailwind CSS to deliver structured gospel content.",
    stack: ["React.js", "TypeScript", "Tailwind CSS"],
    live: "https://gospelcompanion.vercel.app/",
    github: "https://github.com/ayobami11/gospel-companion",
  },
  {
    name: "Compress IPv6 Address",
    period: "Apr 2024",
    description:
      "Developed and optimised an algorithm for IPv6 address compression using an efficient sliding window technique to achieve linear time complexity.",
    stack: ["Next.js", "Shadcn UI", "Tailwind CSS"],
    live: "https://compress-ipv6-address.vercel.app",
    github: "https://github.com/ayobami11/compress-ipv6-address",
  },
  {
    name: "Tweetter",
    period: "Jun 2022",
    description:
      "Engineered a full-stack social media application replica leveraging the MERN stack, catering to the needs of 100+ registered users.",
    stack: ["React.js", "Express", "MongoDB"],
    live: "https://tweetteer.netlify.app",
    github: "https://github.com/ayobami11/twitter-frontend",
  },
];

/* ─── Section wrapper ────────────────────────────────────────────── */
function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-primary">{icon}</span>
        <h2 className="text-xl font-bold font-secondary">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Sticky top bar */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <a
            href="/Ayobami_Tunwase_Resume.pdf"
            download="Ayobami_Tunwase_Resume.pdf"
            className={cn(buttonVariants({ size: "sm" }), "gap-2")}
          >
            <Download className="h-3.5 w-3.5" />
            Download PDF
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* Profile header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h1 className="font-secondary font-bold text-4xl md:text-5xl mb-2">
            Ayobami Tunwase
          </h1>
          <p className="text-lg text-primary font-medium mb-4">
            Frontend Web Developer
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Lagos, Nigeria
            </span>
            <a
              href="mailto:ayobami.tunwase@gmail.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              ayobami.tunwase@gmail.com
            </a>
            <a
              href="tel:+2348169584645"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              +234 816 958 4645
            </a>
            <a
              href="https://github.com/ayobami11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <FiGithub className="h-3.5 w-3.5" />
              ayobami11
            </a>
            <a
              href="https://linkedin.com/in/ayobami-tunwase"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <FiLinkedin className="h-3.5 w-3.5" />
              ayobami-tunwase
            </a>
          </div>
        </motion.div>

        {/* Summary */}
        <Section icon={<Code2 className="h-5 w-5" />} title="Summary">
          <p className="text-muted-foreground leading-relaxed">
            Detail-oriented web developer with 2+ years of experience building responsive and
            dynamic websites using a mobile-first approach. Proficient in Next.js, React.js, and
            Tailwind CSS, with a strong focus on performance and secure coding practices.
            Passionate about solving real-world software engineering problems and actively
            expanding expertise in cybersecurity to build safer, more resilient systems.
          </p>
        </Section>

        {/* Experience */}
        <Section icon={<Briefcase className="h-5 w-5" />} title="Experience">
          <div className="relative pl-6">
            {/* vertical timeline line */}
            <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />

            {experience.map((job, i) => (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="relative mb-10 last:mb-0"
              >
                {/* timeline dot */}
                <div className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full bg-primary ring-2 ring-background" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-base font-semibold font-secondary text-foreground">
                      {job.company}
                    </h3>
                    <p className="text-sm text-primary font-medium">{job.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-foreground">{job.period}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 sm:justify-end">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section icon={<GraduationCap className="h-5 w-5" />} title="Education">
          <div className="relative pl-6">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />

            {education.map((edu, i) => (
              <div key={i} className="relative mb-6 last:mb-0">
                <div className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full bg-primary ring-2 ring-background" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold font-secondary text-foreground">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-primary font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-foreground">{edu.period}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 sm:justify-end">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section icon={<Code2 className="h-5 w-5" />} title="Skills">
          <div className="grid sm:grid-cols-3 gap-6">
            {skillGroups.map(({ label, skills }) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 font-tertiary">
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section icon={<FolderOpen className="h-5 w-5" />} title="Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="group border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-accent/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold font-secondary group-hover:text-primary transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex gap-2 shrink-0 ml-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live site"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FiGithub className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="muted" className="text-xs px-2 py-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">{project.period}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/#projects"
              className={cn(buttonVariants({ size: 'sm' }), 'rounded-full')}
            >
              View All Projects
            </Link>
          </div>
        </Section>

        {/* Interests */}
        <Section icon={<Code2 className="h-5 w-5" />} title="Interests">
          <div className="flex flex-wrap gap-2">
            {["Web Development", "Cybersecurity", "Open Source"].map((interest) => (
              <Badge key={interest} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>
        </Section>

      </main>
    </div>
  );
}
