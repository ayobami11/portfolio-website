'use client'

import { useAppContext } from '@/app/contexts/app';

import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';

// import { Inter } from 'next/font/google'
import styles from '@/app/page.module.css';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { state } = useAppContext();

  return (
    <div className={`${styles.pageWrapper} ${state.isDarkMode ? 'darkMode' : ''}`}>
      <Header />
      <main className={styles.main}>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
