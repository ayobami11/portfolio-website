"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto w-11/12 min-h-screen mt-24"
    >
      <header>
        <span className="block font-tertiary font-medium tracking-widest text-xl mb-8 text-peach dark:text-light-green">
          Hello there, I&apos;m
        </span>
        <h1 className="tracking-wide text-grayish-blue text-[clamp(2.25rem,4vw,4rem)] leading-tight font-secondary mb-8 font-bold dark:text-lightest-slate">
          Ayobami Tunwase.
        </h1>
      </header>

      <h2 className="text-[clamp(2.25rem,3vw,3.5rem)] leading-tight text-light-gray tracking-wide mb-16 dark:text-inherit">
        I create user-friendly, aesthetically-pleasing websites.
      </h2>
      <a
        href="/Ayobami_Tunwase_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent rounded border-2 border-current text-peach transition p-3 outline-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-btn-hover dark:text-light-green"
      >
        View resume
      </a>
    </motion.section>
  );
}
